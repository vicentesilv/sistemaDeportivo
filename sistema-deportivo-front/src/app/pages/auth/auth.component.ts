import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {
  trigger,
  transition,
  style,
  animate,
} from '@angular/animations';
import { User } from 'src/app/interfaces/user';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  animations: [
    trigger('formSwitch', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('350ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class AuthComponent implements OnInit {
  mode: 'login' | 'signin' = 'login';
  loginForm: FormGroup;
  signinForm: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private _userService: UserService,
    private router: Router,
    private _errorService: ErrorService,
    private route: ActivatedRoute,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nombre: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.mode = this.route.snapshot.data['mode'] || 'login';
  }

  switchMode(mode: 'login' | 'signin') {
    this.mode = mode;
    this.loading = false;
  }

  login() {
    if (this.loginForm.invalid) return;

    const user: User = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };

    this.loading = true;

    this._userService.login(user).subscribe({
      next: (token) => {
        localStorage.setItem('token', token);
        this.router.navigate(['/Futbolistas']);
      },
      error: (e: HttpErrorResponse) => {
        this._errorService.msjError(e);
        this.loading = false;
      },
    });
  }

  signin() {
    if (this.signinForm.invalid) return;

    const usuario: User = {
      email: this.signinForm.value.email,
      nombre: this.signinForm.value.nombre,
      password: this.signinForm.value.password,
    };

    this.loading = true;

    this._userService.signIn(usuario).subscribe({
      next: () => {
        this.toastr.success(
          `El usuario ${usuario.email} fue registrado con éxito`,
          'Usuario registrado'
        );
        this.loading = false;
        this.switchMode('login');
      },
      error: () => {
        this.loading = false;
        this.toastr.error('Error al registrar el usuario', 'Error');
      },
    });
  }
}
