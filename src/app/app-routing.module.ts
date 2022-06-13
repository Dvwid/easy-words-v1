import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule), canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
