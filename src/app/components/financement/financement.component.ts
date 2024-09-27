import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Financement, Projet } from '../../models/financement';
import { CrudServiceService } from '../../services/crud-service.service';

interface ProjetAvecFinancements {
    projet: Projet;
    financements: Financement[];
}

@Component({
  selector: 'app-financement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './financement.component.html',
  styleUrls: ['./financement.component.css']
})
export class FinancementComponent implements OnInit {
  projetsAvecFinancements: ProjetAvecFinancements[] = [];

  constructor(private crudSerice: CrudServiceService) {}

  ngOnInit(): void {
    this.getFinancement();
  }

  getFinancement(): void {
    this.crudSerice.get("investissement").subscribe({
      next: (data: Financement[]) => {
        const groupedData: { [key: number]: ProjetAvecFinancements } = {};

        data.forEach(financement => {
          const projetId = financement.projet.id;
          if (!groupedData[projetId]) {
            groupedData[projetId] = {
              projet: financement.projet,
              financements: []
            };
          }
          groupedData[projetId].financements.push(financement);
        });

        this.projetsAvecFinancements = Object.values(groupedData);
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des financements: ", err);
      }
    });
  }
}
