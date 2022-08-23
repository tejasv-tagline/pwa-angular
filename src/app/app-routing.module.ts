import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'about-us',
    component:AboutUsComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'**',
    redirectTo:'home'
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
