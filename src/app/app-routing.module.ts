import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'users', loadChildren: () => import('./user/user.module').then(mod => mod.UserModule)},
  { path: 'posts', loadChildren: () => import('./post/post.module').then(mod => mod.PostModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
