import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';                     
import { Location } from '@angular/common';                         

import { Utilisateur } from '../utilisateur';                        
import { UtilisateurService } from '../utilisateur.service';         
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})

export class UtilisateurComponent implements OnInit {

  utilisateur: Utilisateur;
  
  constructor(private utilisateurService: UtilisateurService) { }


  //Bouton de connexion
  OnClick_utilisateur(formData) {
    this.getUtilisateur(formData.email, formData.motDePasse)
  }

  getUtilisateur(email: string, motDePasse: string): void {
    this.utilisateurService.getUtilisateur(email, motDePasse).subscribe(utilisateur => this.utilisateur = utilisateur);
  }


  ngOnInit(): void { }
}
