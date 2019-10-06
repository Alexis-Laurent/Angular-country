import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';                               
import { AllCountriesComponent } from './all-countries/all-countries.component';      
import { CountryDetailComponent } from './country-detail/country-detail.component';   
import { ForumComponent } from './forum/forum.component';                             
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { TraductionComponent } from './traduction/traduction.component';                 
import { AnimationComponent } from './animation/animation.component';                 


const routes: Routes = [                                      //routes
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'all-countries', component: AllCountriesComponent },
  { path: 'detail/:name', component: CountryDetailComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'utilisateur', component: UtilisateurComponent },
  { path: 'traduction', component: TraductionComponent },
  { path: 'animation', component: AnimationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
