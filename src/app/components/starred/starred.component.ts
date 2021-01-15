import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Starred } from 'src/app/model/starred.model';
import { GithubService } from 'src/app/service/github.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-starred',
  templateUrl: './starred.component.html',
  styleUrls: ['./starred.component.scss']
})
export class StarredComponent implements OnInit {

  username: string;
  starreds: Array<Starred> = null;

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
            this.loadStarredByUsername(this.username);
          }
        });
  }

  loadStarredByUsername(username) {
    this.githubService.findStarredByUsername(username).subscribe(res => {
      this.starreds = res;
    }, error => {
      this.error = true;
    });
  }

}
