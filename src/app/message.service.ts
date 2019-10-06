import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// Envoi un message d'erreur à l'utilisateur
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

}
