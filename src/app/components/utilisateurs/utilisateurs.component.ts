import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/user';
import { CrudServiceService } from '../../services/crud-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-utilisateurs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {
  users: Users[] = []; // Initialisation pour éviter 'undefined'

  constructor(private crudService: CrudServiceService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.crudService.get("utilisateur").subscribe({
      next: (data) => {
        console.log(data);
        this.users = data;
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des utilisateurs: ", err);
      }
    });
  }

  toggleStatut(user: Users): void {
    if (user.id === undefined) {
      console.error("ID de l'utilisateur non défini.");
      return; 
    }

    const newStatut = !user.statutCompte;

    this.crudService.active('utilisateur', user.id, { statutCompte: newStatut }).subscribe({
      next: () => {
        user.statutCompte = newStatut; // Mise à jour locale après succès
      },
      error: (err) => {
        console.error(`Erreur lors de la mise à jour du statut de l'utilisateur ${user.id}: `, err);
      }
    });
  }
}
