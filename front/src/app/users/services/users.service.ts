import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../model/user';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly API_URL = '/assets/users.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<User[]>(this.API_URL)
    .pipe(
      first(),
      tap(users => console.log(users))
    );
  }
}
