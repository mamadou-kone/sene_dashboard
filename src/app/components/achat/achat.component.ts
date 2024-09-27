import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../../services/crud-service.service';
import { Achat } from '../../models/achat';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achat.component.html',
  styleUrl: './achat.component.css'
})
export class AchatComponent implements OnInit{
  achats:Achat[]=[];
  constructor(private crudService:CrudServiceService){}
  ngOnInit(): void {
    this.getAchat();
  }

  getAchat(): void {
    this.crudService.get("achat").subscribe({
      next: (data) => {
        console.log(data);
        this.achats = data;
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des achats: ", err);
      }
    });
  }

}
