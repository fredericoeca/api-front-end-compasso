import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'api-compasso-teste';
  username: string = '';

  constructor(
    private router: Router
  ){}

  goToSearchUser() {
    this.router.navigate(['user'], { queryParams : { 'user' : this.username }});
  }

}
