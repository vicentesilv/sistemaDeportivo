import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Goles } from 'src/app/interfaces/goles';
import { Jugadores } from 'src/app/interfaces/jugadores';
import { GolesService } from 'src/app/services/goles.service';
import { JugadoresServices } from 'src/app/services/jugadores.service';

@Component({
  selector: 'app-pagina-futbolistas',
  templateUrl: './pagina-futbolistas.component.html',
  styleUrls: ['./pagina-futbolistas.component.css'],
})
export class PaginaFutbolistasComponent implements OnInit {
  imagenSeleccionada: string | null = null;
  futbolistas: Jugadores[] = [];
  futbolistasFiltrados: Jugadores[] = [];
  todosGoles: Goles[] = [];
  goles: Goles[] = [];
  jugadorSeleccionado: Jugadores | null = null;
  buscador: string = '';
  cargando: boolean = true;

  constructor(
    private _FutbolistaServices: JugadoresServices,
    private _GolesServices: GolesService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getMostrarEquipos();
    this.getGoles();
  }

  getMostrarEquipos(): void {
    this.cargando = true;
    this._FutbolistaServices.getJugadores().subscribe({
      next: (data) => {
        this.futbolistas = data;
        this.futbolistasFiltrados = data;
        this.cargando = false;
      },
      error: () => {
        this.cargando = false;
        this.toastr.error('Error al cargar los futbolistas', 'Error');
      }
    });
  }

  getGoles(): void {
    this._GolesServices.getGoles().subscribe({
      next: (data) => {
        this.todosGoles = data;
        this.goles = [];
        this.todosGoles.forEach((gol) => {
          const jugador = this.futbolistas.find(
            (futbolista) => futbolista.idJugador === gol.idJugador
          );
          gol.nombreJugador = jugador ? jugador.nombre : 'Desconocido';
        });
      },
      error: () => {
        this.toastr.error('Error al cargar los goles', 'Error');
      }
    });
  }

  mostrarFoto(img: string, jugador: Jugadores): void {
    this.imagenSeleccionada = img;
    this.jugadorSeleccionado = jugador;
    this.goles = this.todosGoles.filter((gol) => gol.idJugador === jugador.idJugador);
  }

  get golesAnotados(): number {
    return this.goles.filter((g) => g.gol).length;
  }

  get golesFallados(): number {
    return this.goles.filter((g) => !g.gol).length;
  }

  get precision(): number {
    const total = this.goles.length;
    return total > 0 ? Math.round((this.golesAnotados / total) * 100) : 0;
  }

  filtrarJugadores(): void {
    const termino = this.buscador.toLowerCase().trim();
    if (!termino) {
      this.futbolistasFiltrados = this.futbolistas;
      return;
    }
    this.futbolistasFiltrados = this.futbolistas.filter(
      (j) =>
        j.nombre.toLowerCase().includes(termino) ||
        j.nacionalidad.toLowerCase().includes(termino) ||
        j.posicion.toLowerCase().includes(termino)
    );
  }
}
