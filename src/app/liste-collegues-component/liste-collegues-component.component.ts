import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models';

@Component({
  selector: 'app-liste-collegues-component',
  templateUrl: './liste-collegues-component.component.html',
  styleUrls: ['./liste-collegues-component.component.css']
})
export class ListeColleguesComponentComponent implements OnInit {

  @Input() listCollegues: Collegue[];
  debut: number = 0;
  fin: number = 3;
  nbrButton: number;
  tabButton = [];

  clic1(nb: number) {
    console.log(nb)
    this.debut = 3 * nb;
    this.fin = 3 + 3 * nb;
  }

  remplirTab(nbr: number) {

    for (let i = 0; i < nbr; i++) {
      this.tabButton.push(i);
    }
  }

  constructor() { }

  ngOnInit() {
    this.nbrButton = Math.floor(this.listCollegues.length / 3);
    if (this.listCollegues.length % 3 != 0 || this.nbrButton === 0) {
      this.nbrButton += 1;
    }
    this.remplirTab(this.nbrButton);
  }

}
