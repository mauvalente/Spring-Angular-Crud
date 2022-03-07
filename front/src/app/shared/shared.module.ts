import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { EnabledPipe } from './pipes/enabled.pipe';
import { PasswordPipe } from './pipes/password.pipe';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    EnabledPipe,
    PasswordPipe
  ],
  imports: [
    AppMaterialModule,
    CommonModule
  ],
  exports: [
    ErrorDialogComponent,
    EnabledPipe,
    PasswordPipe
  ]
})
export class SharedModule { }
