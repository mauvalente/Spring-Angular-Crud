import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../model/user';
import { first, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly API_URL = 'http://host.docker.internal:8080/api/users';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<User[]>(this.API_URL)
    .pipe(
      first(),
      tap(users => console.log(users))
    );
  }

  save(user: User): Observable<User> {
    return this.httpClient.post<User>(this.API_URL, user);
  }

  findById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.API_URL}/${id}`);
  }

  update(user: User): Observable<User> {
    return this.httpClient.put<User>(this.API_URL, user);
  }

  delete(user: User): Observable<User> {
    return this.httpClient.delete<User>(`${this.API_URL}/${user.id}`);
  }
}
