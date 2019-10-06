import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';   //accès http
import { FormsModule } from '@angular/forms';              //module formulaire
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { CountryService } from './country.service';             
import { AllCountriesComponent } from './all-countries/all-countries.component';       
import { CountryDetailComponent } from './country-detail/country-detail.component';

import { ForumService } from './forum.service';
import { ForumComponent } from './forum/forum.component';

import { UtilisateurService } from './utilisateur.service';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';

import { TraductionComponent } from './traduction/traduction.component';
import { AnimationComponent } from './animation/animation.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllCountriesComponent,         
    CountryDetailComponent,         
    ForumComponent,
    UtilisateurComponent,
    TraductionComponent,
    AnimationComponent,                
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],

  providers: [CountryService, UtilisateurService, ForumService],      
  bootstrap: [AppComponent]
})

export class AppModule { }
