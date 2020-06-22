import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule', canActivate: [AuthGuard] },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },  { path: 'service1', loadChildren: './service1/service1.module#Service1PageModule' },
  { path: 'service2', loadChildren: './service2/service2.module#Service2PageModule' },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
