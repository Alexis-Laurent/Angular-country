import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Forum } from './forum';
import { MessageService } from './message.service';

import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ForumService {

  constructor(private http: HttpClient) { }


  //getForums(): Observable<Forum[]> {
  //  const url = 'http://api.forum.reseaudentreprise.com/api/fora';
  //  return this.http.get<Forum[]>(url)
  //}

}
