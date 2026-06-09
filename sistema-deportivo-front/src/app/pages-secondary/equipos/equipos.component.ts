import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Equipos } from '../../interfaces/equipos';
import { Partidos } from 'src/app/interfaces/partidos';
import { EquiposService } from 'src/app/services/equipos.service';
import { PartidosService } from 'src/app/services/partidos.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  equipo: Equipos | null = null;
  partidos: Partidos[] = [];
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private equiposService: EquiposService,
    private partidosService: PartidosService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.equiposService.getEquipo(id).subscribe({
        next: (data) => {
          this.equipo = data;
          this.getMostrarPartidos();
        },
        error: () => {
          this.loading = false;
        }
      });
    }
  }

  getMostrarPartidos(): void {
    this.partidosService.getPartidos().subscribe({
      next: (data) => {
        if (this.equipo) {
          this.partidos = data
            .filter((item) =>
              item.idEquipo.toLowerCase() === this.equipo?.nombre.toLowerCase()
            )
            .map((item) => ({
              ...item,
              fecha: formatDate(item.fecha, 'dd/MM/yyyy', 'en-US')
            }));
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  get totalPartidos(): number {
    return this.partidos.length;
  }

  get partidosGanados(): number {
    return this.partidos.filter((p) => p.marcadorF > p.marcadorC).length;
  }

  get partidosPerdidos(): number {
    return this.partidos.filter((p) => p.marcadorF < p.marcadorC).length;
  }

  get partidosEmpatados(): number {
    return this.partidos.filter((p) => p.marcadorF === p.marcadorC).length;
  }

  get golesFavor(): number {
    return this.partidos.reduce((sum, p) => sum + (p.marcadorF || 0), 0);
  }

  get golesContra(): number {
    return this.partidos.reduce((sum, p) => sum + (p.marcadorC || 0), 0);
  }
}
