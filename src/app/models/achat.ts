import { Data } from "@angular/router";

export class Achat {
    id?: number;
    date:Date;
    montant:number;
    client: Client;
    produit:Produit
}


export class Client {
    id: number;  
    nom: string;
    prenom:string;
    email:string
}

export class Produit{
    id?: number;
    nom:string;
    description:string;
    prix:number;
}