export class Produit {
    id?: number;
    nom:string;
    prix:number;
    quantite:string;
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