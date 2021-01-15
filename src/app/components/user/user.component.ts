import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { User } from 'src/app/model/user.model';
import { GithubService } from 'src/app/service/github.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  username: string;
  user: User = null;

  error: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private githubService: GithubService
  ) { }

  ngOnInit() {

    this.username = this.activatedRoute.snapshot.params.username;

    if(this.username) {
      this.loadUserDetails(this.username);
    } else {
      this.activatedRoute
      .queryParamMap
      .pipe(
        map( response => response )).subscribe(( res: any ) => {
          this.username = res.params.user;
          if(this.username) {
            this.loadUserDetails(this.username);
          }
        });
    }    
  }

  loadUserDetails(username: string) {
    this.user = null;
    this.error = false;
    this.githubService.findUserByUsername(username).subscribe( res => {
        this.user = res;
    }, error => {
      this.error = true;
    });
  }

  goToRepos(username: string) {
    this.router.navigate(['/repos'], { queryParams: { 'user' : username } });
  }

  goToStarred(username: string){
    this.router.navigate(['/starred'], { queryParams: { 'user' : username } });
  }

}
