import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Projets } from '../../models/projets';
import { CrudServiceService } from '../../services/crud-service.service';

@Component({
  selector: 'app-projet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css'] // Corrigé ici
})
export class ProjetComponent implements OnInit {
  projets: Projets[] = [];

  constructor(private crudService: CrudServiceService) {}

  ngOnInit(): void {
    this.getProjet();
  }

  getProjet(): void {
    this.crudService.get("projet").subscribe({
      next: (data) => {
        console.log(data);
        this.projets = data;
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des projets: ", err);
      }
    });
  }

  toggleStatut(projet: Projets): void {
    if (projet.id === undefined) {
      console.error("ID de projet non défini.");
      return; 
    }

    const newStatut = !projet.statut;

    this.crudService.active('projet', projet.id, { statut: newStatut }).subscribe({
      next: () => {
        projet.statut = newStatut;
      },
      error: (err) => {
        console.error(`Erreur lors de la mise à jour du statut du projet ${projet.id}: `, err);
      }
    });
  }
}
