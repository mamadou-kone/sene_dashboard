export class Projets {
    id?: number;
    montantCollecte:number;
    montantNecessaire:number;
    titre:string
    statut:boolean;
    agriculteur: Agriculteur;
    image?: string;
}


export class Agriculteur {
    id: number;  
    nom: string;
    prenom:string;
    email:string
}