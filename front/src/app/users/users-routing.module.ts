import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserResolverService } from './services/user-resolver.service';
import { UserListComponent } from './user-list/user-list.component';
import { UserNewComponent } from './user-new/user-new.component';


const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'new', component: UserNewComponent },
  { path: 'new/:id', component: UserNewComponent, resolve: {user: UserResolverService} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
