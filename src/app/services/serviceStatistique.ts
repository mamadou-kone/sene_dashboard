import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Assurez-vous qu'il est déclaré ici
})
export class StatistiquesService {
  private baseUrl = 'http://localhost:8080/api/statistiques';

  constructor(private http: HttpClient) {}

  getStatistiquesUtilisateurs(periode: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/utilisateurs?periode=${periode}`);
  }

  getStatistiquesAchats(periode: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/achats?periode=${periode}`);
  }

  getStatistiquesFinancements(periode: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/financements?periode=${periode}`);
  }
}