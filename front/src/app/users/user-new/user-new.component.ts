import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { catchError, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { User } from '../model/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss']
})
export class UserNewComponent implements OnInit {

  // user$: Observable<User>;
  formGroup: FormGroup;
  user: User;

  constructor(
    private router: Router,
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {
    this.user = this.activatedRoute.snapshot.data["user"];

    this.formGroup = this.formBuilder.group({
      id: [(this.user && this.user.id)?this.user.id:null],
      username: [this.user.username, Validators.required],
      password: [this.user.password, Validators.required],
      name: [this.user.name, Validators.required],
      surname: [this.user.surname, Validators.required],
      email: [this.user.email, Validators.email],
      phone: [this.user.phone, Validators.required]
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.usersService.save(this.formGroup.value)
    .pipe(
      catchError(error => {
        this.onError('Error saving User !');
        return of([]);
      })
    )
    .subscribe(result => this.router.navigateByUrl("/users"));
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    })
  }
}
