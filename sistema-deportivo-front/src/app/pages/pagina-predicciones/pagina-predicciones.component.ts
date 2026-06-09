import { Component, OnInit } from '@angular/core';
import { Equipos } from 'src/app/interfaces/equipos';
import { Goles } from 'src/app/interfaces/goles';
import { Jugadores } from 'src/app/interfaces/jugadores';
import { EquiposService } from 'src/app/services/equipos.service';
import { GolesService } from 'src/app/services/goles.service';
import { JugadoresServices } from 'src/app/services/jugadores.service';

@Component({
  selector: 'app-pagina-predicciones',
  templateUrl: './pagina-predicciones.component.html',
  styleUrls: ['./pagina-predicciones.component.css'],
})
export class PaginaPrediccionesComponent implements OnInit {
  jugadores: Jugadores[] = [];
  equipos: Equipos[] = [];
  goles: Goles[] = [];
  resultado: number = 0;
  confianza: number = 0;
  distribucionFinal: number[] = [];
  mostrandoResultado: boolean = false;

  formulario = {
    jugadorId: null as number | null,
    sede: '',
    inicioJuego: '',
    equipoRivalId: null as number | null,
    minuto: 0,
    ronda: '',
    marcadorF: 0,
    marcadorC: 0,
  };

  constructor(
    private jugadoresService: JugadoresServices,
    private equiposService: EquiposService,
    private golesService: GolesService
  ) {}

  ngOnInit(): void {
    this.cargarJugadores();
    this.cargarEquipos();
  }

  cargarJugadores(): void {
    this.jugadoresService.getJugadores().subscribe({
      next: (data) => {
        this.jugadores = data;
      },
    });
  }

  cargarEquipos(): void {
    this.equiposService.getEquipos().subscribe({
      next: (data) => {
        this.equipos = data;
      },
    });
  }

  onJugadorSelect(): void {
    if (!this.formulario.jugadorId) return;

    this.golesService.getGoles().subscribe({
      next: (data) => {
        this.goles = data.filter(
          (gol) => gol.idJugador == this.formulario.jugadorId
        );
      },
    });
  }

  get distribucionBase(): number[] {
    const defaults = [5, 10, 25, 25, 10, 5];
    if (this.goles.length === 0) return defaults;

    const lugarCounts: Record<number, number> = {};
    this.goles.forEach((gol) => {
      lugarCounts[gol.lugarTiro] = (lugarCounts[gol.lugarTiro] || 0) + 1;
    });

    const total = this.goles.length;
    const pesoHistorico = Math.min(0.8, 0.25 + total * 0.04);

    return defaults.map((p, i) => {
      const historico = ((lugarCounts[i + 1] || 0) / total) * 100;
      return +(historico * pesoHistorico + p * (1 - pesoHistorico)).toFixed(1);
    });
  }

  get distribucionAjustada(): number[] {
    const dist = [...this.distribucionBase];
    const a = [0, 0, 0, 0, 0, 0];

    if (this.formulario.sede === 'sede') {
      a[1] += 4; a[4] += 4;
      a[0] -= 2; a[2] -= 1; a[3] -= 2; a[5] -= 1;
    } else if (this.formulario.sede === 'visitante') {
      a[0] += 3; a[2] += 3;
      a[3] += 2; a[5] += 2;
      a[1] -= 3; a[4] -= 3;
    }

    if (this.formulario.minuto > 75) {
      a[1] += 5; a[4] += 5;
      a[0] -= 2; a[2] -= 2; a[3] -= 2; a[5] -= 2;
    } else if (this.formulario.minuto < 20) {
      a[0] += 3; a[2] += 3;
      a[3] += 2; a[5] += 2;
    }

    if (this.formulario.marcadorF < this.formulario.marcadorC) {
      a[0] += 3; a[1] += 4; a[2] += 3;
      a[4] += 2;
    } else if (this.formulario.marcadorF > this.formulario.marcadorC) {
      a[4] += 4; a[5] += 3;
    }

    if (this.formulario.ronda === 'final') {
      a[1] += 2; a[4] += 4;
    } else if (this.formulario.ronda === 'regular') {
      a[0] += 2; a[2] += 2;
      a[3] += 1; a[5] += 1;
    }

    return dist.map((p, i) => Math.max(1, +(p + a[i]).toFixed(1)));
  }

  calcularPrediccion(): void {
    this.distribucionFinal = this.distribucionAjustada;

    const total = this.distribucionFinal.reduce((a, b) => a + b, 0);
    const random = Math.random() * total;
    let acumulado = 0;

    for (let i = 0; i < this.distribucionFinal.length; i++) {
      acumulado += this.distribucionFinal[i];
      if (random <= acumulado) {
        this.resultado = i + 1;
        break;
      }
    }

    const maxProb = Math.max(...this.distribucionFinal);
    this.confianza = Math.round((maxProb / total) * 100);

    this.mostrandoResultado = true;
  }

  procesarFormulario(): void {
    this.calcularPrediccion();
  }

  seleccionarZona(zona: number): void {
    this.resultado = zona;
    this.mostrandoResultado = true;
    this.confianza = 0;
  }

  getEquipoNombre(equipoId: number | null): string | null {
    if (!equipoId) return null;
    const equipo = this.equipos.find((e) => e.idEquipo == equipoId);
    return equipo ? equipo.nombre.toString() : null;
  }

  get lugarTiroLabel(): string {
    const labels: Record<number, string> = {
      1: 'Esquina superior izquierda',
      2: 'Centro superior',
      3: 'Esquina superior derecha',
      4: 'Esquina inferior izquierda',
      5: 'Centro inferior',
      6: 'Esquina inferior derecha',
    };
    return labels[this.resultado] || '';
  }

  get modaLugarTiro(): number | null {
    if (this.goles.length === 0) return null;
    const lugarCounts: Record<number, number> = {};
    this.goles.forEach((gol) => {
      lugarCounts[gol.lugarTiro] = (lugarCounts[gol.lugarTiro] || 0) + 1;
    });
    let maxCount = 0;
    let moda: number | null = null;
    for (const lugar in lugarCounts) {
      if (lugarCounts[lugar] > maxCount) {
        maxCount = lugarCounts[lugar];
        moda = +lugar;
      }
    }
    return moda;
  }

  getShotPosition(lugar: number): { top: number; left: number } {
    const positions: Record<number, { top: number; left: number }> = {
      1: { top: 22, left: 22 },
      2: { top: 22, left: 50 },
      3: { top: 22, left: 78 },
      4: { top: 70, left: 22 },
      5: { top: 70, left: 50 },
      6: { top: 70, left: 78 },
    };
    return positions[lugar] || { top: 50, left: 50 };
  }

  get confidenceColor(): string {
    if (this.confianza >= 40) return '#22c55e';
    if (this.confianza >= 25) return '#eab308';
    return '#ef4444';
  }

  get barMax(): number {
    return Math.max(...this.distribucionFinal, 1);
  }

  get barMaxBase(): number {
    const dist = this.distribucionBase;
    return Math.max(...dist, 1);
  }

  lugarTiroLabelFromNumber(lugar: number | null): string {
    const labels: Record<number, string> = {
      1: 'Esquina superior izquierda',
      2: 'Centro superior',
      3: 'Esquina superior derecha',
      4: 'Esquina inferior izquierda',
      5: 'Centro inferior',
      6: 'Esquina inferior derecha',
    };
    return lugar ? labels[lugar] || '' : '';
  }

  reload() {
    window.location.reload();
  }
}
