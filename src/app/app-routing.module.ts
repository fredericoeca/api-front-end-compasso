import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'repos', loadChildren: './components/repos/repos.module#ReposComponentModule' },
  { path: 'starred', loadChildren: './components/starred/starred.module#StarredComponentModule' },
  { path: 'user', loadChildren: './components/user/user.module#UserComponentModule' },
  { path: 'user/:username', loadChildren: './components/user/user.module#UserComponentModule' }   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
