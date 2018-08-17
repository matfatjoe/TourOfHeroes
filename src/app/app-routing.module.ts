import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail//hero-detail.component';
import { HeroAddComponent } from './hero-add/hero-add.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: HomePageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:key', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'addHero', component:  HeroAddComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
