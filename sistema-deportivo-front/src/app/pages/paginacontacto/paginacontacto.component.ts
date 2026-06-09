import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginacontacto',
  templateUrl: './paginacontacto.component.html',
  styleUrls: ['./paginacontacto.component.css']
})
export class PaginacontactoComponent implements OnInit {

  contactos = [{
    "nombre":"MIGUEL ANTONIO ALVARADO TIERNEY",
     "matricula": 23050198,
     "puesto": ["investigador","diseñador de base de datos"],
     "foto": "miguel.jpeg",
     "correo": "malvarado041@gmail.com",
     "telefono": "526692381166",
     "github":"https://github.com"
  },{
    "nombre":"ALBERTO BRODDEN GAETA",
    "matricula": 23050019,
    "puesto": ["investigador","diseñador de base de datos"],
    "foto": "alberto.jpeg",
    "correo": "Brodenberto5@gmail.com",
    "telefono": "526692381166",
    "github": "https://github.com/BroddenGa"
  },{
    "nombre":"VICENTE ALDAHIR SILVA LIZARRAGA",
    "matricula": 23050044,
    "puesto": ["programador","diseñador de base de datos","diseñador"],
    "foto": "vicente.jpeg",
    "correo": "vicentesilvala@gmail.com",
    "telefono": "526692237128",
    "github": "https://github.com/vicentesilv/"
  },{
    "nombre":"DANIEL EDUARDO TIRADO MUNOZ",
    "matricula": 23050125,
    "puesto": ["lider de proyecto","diseñador de base de datos"],
    "foto": "daniel.jpeg",
    "correo": "danieleduardotirado@gmail.com",
    "telefono": "526692237128",
    "github": "https://github.com/Wannalite"
  },{
    "nombre":"Eduardo Laveaga Sandoval",
    "matricula": 23050088,
    "puesto": ["lider de proyecto","diseñador de base de datos"],
    "foto": "eduardo.jpeg",
    "correo": "eduardolaveaga@outlook.com",
    "telefono": "526693266170",
    "github": "https://github.com"
  }
];

  imagenesCargadas: Set<number> = new Set();

  readonly coloresAccento = [
    '#3b82f6',
    '#8b5cf6',
    '#06b6d4',
    '#f59e0b',
    '#10b981',
  ];

  readonly mapaRoles: Record<string, { icono: string; color: string }> = {
    'programador':     { icono: '&#x1F4BB;', color: '#3b82f6' },
    'diseñador':       { icono: '&#x1F3A8;', color: '#ec4899' },
    'investigador':    { icono: '&#x1F50D;', color: '#8b5cf6' },
    'lider de proyecto': { icono: '&#x1F451;', color: '#f59e0b' },
    'base de datos':   { icono: '&#x1F5C3;', color: '#10b981' },
  };

  constructor() { }

  ngOnInit(): void {
  }

  onImageLoaded(index: number): void {
    this.imagenesCargadas.add(index);
  }

  imageError(index: number): void {
    this.imagenesCargadas.delete(index);
  }

  getInitials(nombre: string): string {
    return nombre
      .split(' ')
      .filter((_, i, arr) => i === 0 || i === arr.length - 1)
      .map(p => p[0])
      .join('');
  }

  acentoColor(index: number): string {
    return this.coloresAccento[index % this.coloresAccento.length];
  }

  rolInfo(puesto: string): { icono: string; color: string } {
    for (const key in this.mapaRoles) {
      if (puesto.includes(key)) return this.mapaRoles[key];
    }
    return { icono: '&#x2B50;', color: '#64748b' };
  }

  onCardMove(event: MouseEvent, index: number): void {
    const card = (event.currentTarget as HTMLElement);
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  }

  onCardLeave(event: MouseEvent): void {
    const card = event.currentTarget as HTMLElement;
    if (card) card.style.transform = '';
  }

  async copiarCorreo(correo: string, event: MouseEvent): Promise<void> {
    event.preventDefault();
    try {
      await navigator.clipboard.writeText(correo);
      const btn = (event.currentTarget as HTMLElement);
      const original = btn.innerHTML;
      btn.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
      btn.classList.add('copiado');
      setTimeout(() => {
        btn.innerHTML = original;
        btn.classList.remove('copiado');
      }, 1500);
    } catch {
      window.open('mailto:' + correo);
    }
  }
}
