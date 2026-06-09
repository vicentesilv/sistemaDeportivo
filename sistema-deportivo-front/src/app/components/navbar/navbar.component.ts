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
    document.body.style.overflow = '';
    this.router.navigate(['/inicioSesion']);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }

  closeMenu() {
    this.menuOpen = false;
    document.body.style.overflow = '';
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 900) {
      this.menuOpen = false;
      document.body.style.overflow = '';
    }
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.closeMenu();
  }
}
