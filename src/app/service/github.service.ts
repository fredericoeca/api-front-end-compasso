import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(
    private http: HttpClient 
  ) { }

  findUserByUsername(username: string) : Observable<User> {
    return this.http.get<User>(`https://api.github.com/users/${username}`);
  }
  
  findRepositoryByUsername(username: string) : Observable<any> {
    return this.http.get<any>(`https://api.github.com/users/${username}/repos`);
  }
  
  findStarredByUsername(username: string) : Observable<any> {
    return this.http.get<any>(`https://api.github.com/users/${username}/starred`);
  }

}
