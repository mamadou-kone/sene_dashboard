import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationDTO } from '../../models/authentificationDTO';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule, HttpClientModule], // Inclure HttpClientModule ici
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService,private router :Router) {}

  onLogin() {
    const authData: AuthentificationDTO = {
      username: this.email,
      password: this.password
    };

    this.authService.login(authData).subscribe(
      response => {
        console.log('Connexion réussie', response);
        this.router.navigate(['/accueil'])
      },
      error => {
        console.error('Erreur de connexion', error);
        this.errorMessage = 'Identifiants invalides. Veuillez réessayer.';
      }
    );
  }
}
