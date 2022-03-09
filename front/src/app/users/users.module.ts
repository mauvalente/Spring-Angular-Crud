import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserNewComponent } from './user-new/user-new.component';


@NgModule({
  declarations: [
    UserListComponent,
    UserNewComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    AppMaterialModule,
    FormsModule,
    SharedModule
  ]
})
export class UsersModule { }
