import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../../services/crud-service.service';
import { CommonModule } from '@angular/common';
import { Produit } from '../../models/produit';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent implements OnInit{
  produits:Produit[]=[];
constructor(private crudService:CrudServiceService){}
  ngOnInit(): void {
    this.getProduit();
  }

  getProduit(): void {
    this.crudService.get("produit").subscribe({
      next: (data) => {
        console.log(data);
        this.produits = data;
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des prduits: ", err);
      }
    });
  }

  toggleStatut(produit: Produit): void {
    if (produit.id === undefined) {
      console.error("ID de projet non défini.");
      return; 
    }

    const newStatut = !produit.statut;

    this.crudService.active('produit', produit.id, { statut: newStatut }).subscribe({
      next: () => {
        produit.statut = newStatut;
      },
      error: (err) => {
        console.error(`Erreur lors de la mise à jour du statut du produit ${produit.id}: `, err);
      }
    });
  }

}
