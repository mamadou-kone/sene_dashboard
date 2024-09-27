export class Users {
    id?: number;                     // Identifiant de l'utilisateur
    email: string;                   // Adresse email de l'utilisateur
    nom: string;                     // Nom de l'utilisateur
    prenom: string;                  // Prénom de l'utilisateur
    address: string;                 // Adresse de l'utilisateur
    tel: string;                     // Téléphone de l'utilisateur
    statutCompte: boolean;           // Statut du compte (actif ou non)
    role: Role;                      // Rôle de l'utilisateur (Admin, Agriculteur, etc.)
    image?: string;                  // Image encodée en Base64

    constructor(
        id?: number,
        email: string = '',
        nom: string = '',
        prenom: string = '',
        address: string = '',
        tel: string = '',
        statutCompte: boolean = false,
        role: Role = new Role(),   // Crée un nouvel objet Role par défaut
        image?: string
    ) {
        this.id = id;
        this.email = email;
        this.nom = nom;
        this.prenom = prenom;
        this.address = address;
        this.tel = tel;
        this.statutCompte = statutCompte;
        this.role = role;
        this.image = image;
    }
}

// Définition du modèle de rôle
export class Role {
    id: number;  // Identifiant du rôle
    nom: string; // Nom du rôle

    constructor(id: number = 0, nom: string = '') {
        this.id = id;
        this.nom = nom;
    }
}
