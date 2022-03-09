import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { empty, Observable } from 'rxjs';

import { User } from '../model/user';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<User>{

  constructor(private userService: UsersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params["id"];
    if (id) {
      return this.userService.findById(id);
    }
    return new Observable<User>();
  }
}
