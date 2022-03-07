import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UsersService } from '../services/users.service';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Observable<User[]>;

  displayedColumns = [
    'id', 'username', 'password',
    'is_enabled', 'register_date',
    'name', 'surname', 'email', 'phone'
  ];

  constructor(
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

}
