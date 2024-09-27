export class Financement{
    id:number;
    montant:number;
    projet:Projet;
    investisseur:Investisseur;
}


export class Projet{
    id:number;
    titre:string;
}

export class Investisseur{
    id:number;
    nom:string;
    prenom:string;
    email:string;
}