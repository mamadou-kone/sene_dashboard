import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {

  constructor(private service: AuthService,private router: Router) {}

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  // Méthode de déconnexion
  logout() {
    // Appel de la méthode logout du AuthService
    this.service.logout();
  }

}
