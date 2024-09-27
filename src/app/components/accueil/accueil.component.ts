import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { StatistiquesService } from '../../services/serviceStatistique';
import { CrudServiceService } from '../../services/crud-service.service';

// Enregistrement de tous les composants nécessaires
Chart.register(...registerables);

interface DataItem {
  label: string;
  value: number;
}

@Component({
  selector: 'app-accueil',
  standalone: true,
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  utilisateursData: any;
  achatsData: any;
  financementsData: any;

  total:string;

  constructor(private statistiquesService: StatistiquesService,private crudServ:CrudServiceService) {}

  ngOnInit(): void {
    const periode = '2023-01-01 to 2023-12-31'; // Exemple de période
    this.loadStatistiques(periode);
    this.totalUtilisateur();
  }

  loadStatistiques(periode: string): void {
    this.statistiquesService.getStatistiquesUtilisateurs(periode).subscribe(data => {
      this.utilisateursData = this.formatData(data);
      this.renderChart('utilisateursChart', this.utilisateursData);
    });

    this.statistiquesService.getStatistiquesAchats(periode).subscribe(data => {
      this.achatsData = this.formatData(data);
      this.renderChart('achatsChart', this.achatsData);
    });

    this.statistiquesService.getStatistiquesFinancements(periode).subscribe(data => {
      this.financementsData = this.formatData(data);
      this.renderChart('financementsChart', this.financementsData);
    });
  }

  formatData(data: any): any {
    const labels: string[] = data.labels;
    const datasets = data.datasets;

    const sortedData: DataItem[] = labels.map((label, index) => ({
      label,
      value: datasets[0].data[index]
    })).sort((a, b) => new Date(a.label) > new Date(b.label) ? 1 : -1);

    const sortedLabels = sortedData.map((item: DataItem) => item.label);
    const sortedValues = sortedData.map((item: DataItem) => item.value);

    return {
      labels: sortedLabels,
      datasets: [{
        label: datasets[0].label,
        data: sortedValues,
        backgroundColor: datasets[0].backgroundColor || 'rgba(75, 192, 192, 0.6)',
        borderColor: datasets[0].borderColor || 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    };
  }

  renderChart(chartId: string, chartData: any): void {
    const ctx = document.getElementById(chartId) as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: {
        responsive: true,
        scales: {
          x: {
            ticks: {
              autoSkip: false // Affichez tous les mois
            },
            grid: {
              display: false
            }
          },
          y: {
            beginAtZero: true
          }
        },
        elements: {
          bar: {
            // Définissez la largeur des barres ici
            borderWidth: 1,
            // Utiliser une propriété CSS pour ajuster la largeur si nécessaire
            // Si barThickness n'est pas reconnu, il faut le gérer via le CSS
          }
        }
      }
    });
  }

  totalUtilisateur(){
    this.crudServ.get("utilisateur/total").subscribe({
      next: (data) => {
        console.log(data);
        this.total = data;
      },
      error: (err) => {
        console.error("Erreur lors de la récupération du total utilisateur des utilisateurs: ", err);
      }
    });

  }


}