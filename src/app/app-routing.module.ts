import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/userList',
    pathMatch: 'full'
  },
  {
    path: 'userList',
    component: UserListComponent
  },
  {
    path: 'userDetails',
    component: UserDetailsComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
