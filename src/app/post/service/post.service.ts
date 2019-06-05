import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/posts';
  }

  public findAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.usersUrl);
  }

  public save(user: Post) {
    return this.http.post<Post>(this.usersUrl, user);
  }
}
