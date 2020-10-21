import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'wptestrelease';

  public cards:Array<String>;
  public actualCard:String;

  constructor() { 
    this.cards = ['card1', 'card2', 'card3' ]
  }

  setActualCard(card){
    console.log(card);
    
    this.actualCard = card;

  }
}
