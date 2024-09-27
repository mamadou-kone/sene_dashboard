// src/app/models/statistiques.model.ts
export interface Statistiques {
  labels: string[];
  datasets: Array<{
    label: string;
    data: number[];  // Assurez-vous que 'data' est un tableau de nombres
  }>;
}