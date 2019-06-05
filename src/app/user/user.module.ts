import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {UserRoutingModule} from './user-routing.module';
import {UserFormComponent} from './user-form/user-form.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserService} from './service/user.service';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    UserFormComponent,
    UserListComponent
  ],
  providers: [
    UserService
  ]
})
export class UserModule {}
