import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Repos } from 'src/app/model/repos.model';
import { GithubService } from 'src/app/service/github.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {

  username: string;
  repositories: Array<Repos> = null;

  error: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private githubService: GithubService
  ) { }

  ngOnInit() {
    this.activatedRoute
      .queryParamMap
      .pipe(
        map( response => response )).subscribe(( res: any ) => {
          this.username = res.params.user;
          if(this.username) {
            this.loadReposByUsername(this.username);
          }
        });
  }

  loadReposByUsername(username: string) {
    this.githubService.findRepositoryByUsername(username).subscribe( res => {
      this.repositories = res.sort( (a, b) => {
        return a.created_at > b.created_at ? -1 : a.created_at < b.created_at ? 1 : 0
      });
    }, error => {
      this.error = true;
    });
  }

}
