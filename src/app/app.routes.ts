import { Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AchatComponent } from './components/achat/achat.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { LoginComponent } from './components/login/login.component';
import { ProduitComponent } from './components/produit/produit.component';
import { ProjetComponent } from './components/projet/projet.component';
import { StocksComponent } from './components/satatistique/stocks.component';
import { UtilisateursComponent } from './components/utilisateurs/utilisateurs.component';
import { FinancementComponent } from './components/financement/financement.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirection vers la page de connexion
    {path:'login',component:LoginComponent},
    
    {path:'',component:DashbordComponent,
        children :[
    {path:'accueil',component:AccueilComponent},
    {path:'utilisateurs',component:UtilisateursComponent},
    {path:'projet',component:ProjetComponent},
    {path:'produit',component:ProduitComponent},
    {path:'financement',component:FinancementComponent},
    {path:'achat',component:AchatComponent},
    {path:'stocks',component:StocksComponent},
        ]
    }
    
];
