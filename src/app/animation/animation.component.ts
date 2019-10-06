import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],

  animations: [
     // Train en mouvement
    trigger('animationTrain', [
      state('position0', style({
        transform: 'translateX(-2000px)'
      })),
      state('position1', style({
        transform: 'translateX(2000px)'
      })),
      transition('position0 <=> position1', animate(3000))
    ]),

    // Liste item
    trigger('animationListe', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(500)),
    ]),    
  ]
})

export class AnimationComponent implements OnInit {

  // Train en mouvement
  state: string = "position0";
  Smile_animate() {
    this.state = this.state == 'position1' ? 'position0' : 'position1';
  }

  // Liste item
  liste_item = [];
  compteur_item: number = 1;

  Ajouter_item() {
    var ajouter_item = "Liste Item " + this.compteur_item;
    this.compteur_item++;
    this.liste_item.push(ajouter_item);
  }
  Effacer_item() {
    this.liste_item.length -= 1;
  }
  
  
  constructor() { }
  ngOnInit() { }
}
