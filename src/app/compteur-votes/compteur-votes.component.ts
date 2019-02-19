import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-compteur-votes',
  templateUrl: './compteur-votes.component.html',
  styleUrls: ['./compteur-votes.component.css']
})
export class CompteurVotesComponent implements OnInit {

  compteur: number = 0;

  constructor(private _srv: DataService) { }

  ngOnInit() {

    if (localStorage.getItem("compteur") != null) {
      this.compteur = Number(localStorage.getItem("compteur"));
    }
    this._srv.votesObs.subscribe(
      value => localStorage.setItem("compteur", String(++this.compteur))
    );
  }
}
