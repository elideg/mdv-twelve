import { AuthService } from '@mdv-twelve/core-data';
import { Component } from '@angular/core';

@Component({
  selector: 'mdv-twelve-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';

  links = [
    { path: '/items', icon: 'work', title: 'Items' }
  ]

  userIsAuthenticated = this.authService.isAuthenticated;
  constructor(private authService: AuthService) {}

}
