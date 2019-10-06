import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

import { Utilisateur } from './utilisateur';
import { MessageService } from './message.service';

import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class UtilisateurService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  utilisateurUrl = 'http://api.forum.reseaudentreprise.com';


  getUtilisateur(email: string, motDePasse: string): Observable<Utilisateur> {
    //motDePasse = '7523c62abdb7628c5a9dad8f97d8d8c5c040ede36535e531a8';
    const url = `${this.utilisateurUrl}/api/utilisateurs?email=${email}&mdp=${motDePasse}`;

    return this.http.get<Utilisateur>(url).pipe(
      tap(_ => this.log(`fetched email=${email}`)),
      catchError(this.handleError<Utilisateur>(`getUtilisateur email=${email}`))
    );
  }



/**
* Gérer l'opération HTTP qui a échoué, Laissez l'application continuer
* 
* @param operation - nom de l'opération ayant échoué
* @param result - valeur facultative à renvoyer
*/

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); 

      this.log(`${operation} failed: ${error.message}`);

      // Laisse l'application continuer à fonctionner en renvoyant un résultat vide
      return of(result as T);
    };
  }

  // Enregistrer un message avec le MessageService 
  private log(message: string) {
    this.messageService.add(`utilisateurService: ${message}`);
  }  
};
