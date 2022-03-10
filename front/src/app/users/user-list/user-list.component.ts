import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UsersService } from '../services/users.service';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]>;

  displayedColumns = [
    'id', 'username', 'password',
    'enabled', 'register_date',
    'name', 'surname', 'email', 'phone',
    'actions'
  ];

  constructor(
    private router: Router,
    private usersService: UsersService,
    public dialog: MatDialog
  ) {
    this.users$ = this.usersService.list()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar usuários !');
          return of([])
        })
      );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    })
  }


  ngOnInit(): void {
  }

  delete(user: User) : void {
    if (confirm("Delete User by Id " + user.id)) {
      this.usersService.delete(user)
      .pipe(
        catchError(error => {
          this.onError('Error saving User !');
          return of([]);
        })
      )
      .subscribe(result => this.users$ = this.usersService.list());
    }
  }

  onDeleteError(error: Error) {
    alert("Some error occurs trying to delete" + JSON.stringify(error))
  }

}
