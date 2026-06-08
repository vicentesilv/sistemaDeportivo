import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuOpen = false;

  constructor(private router: Router) {}

  logOut() {
    localStorage.removeItem('token');
    this.menuOpen = false;
    this.router.navigate(['/inicioSesion']);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 900) {
      this.menuOpen = false;
    }
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.menuOpen = false;
  }
}
