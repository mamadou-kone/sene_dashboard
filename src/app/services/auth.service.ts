import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router'; // Importation de Router pour la redirection
import { Observable, tap } from 'rxjs';
import { AuthentificationDTO } from '../models/authentificationDTO';

@Injectable({
  providedIn: 'root' // Fournisseur global du service
})
export class AuthService {
  private apiUrl = 'https://sene-backend-1.onrender.com/auth';

  constructor(private http: HttpClient, private router: Router) {}

  // Méthode de connexion
  login(authentificationDTO: AuthentificationDTO): Observable<any> {
    return this.http.post<{ bearer: string }>(`${this.apiUrl}/connexion`, authentificationDTO)
      .pipe(
        tap(response => {
          console.log('Réponse de l\'API:', response); // Pour déboguer
          if (response.bearer) {
            // Stoker le token dans le localStorage
            localStorage.setItem('token', response.bearer);
            // Redirection vers la page d'accueil après connexion
            this.router.navigate(['/accueil']);
          } else {
            console.error('Token non reçu de l\'API');
          }
        })
      );
  }

  // Méthode de déconnexion
  logout() {
    localStorage.removeItem('token'); // Supprimer le token JWT stocké
    this.router.navigate(['/login']); // Redirection vers la page de login
  }

  // Méthode pour vérifier si l'utilisateur est authentifié
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token'); // Vérifie la présence du token
  }
}