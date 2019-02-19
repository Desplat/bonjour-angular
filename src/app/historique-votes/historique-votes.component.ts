import { Component, OnInit, Input } from '@angular/core';
import { Vote, Avis } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.css']
})
export class HistoriqueVotesComponent implements OnInit {

  Avis = Avis;

  listVotes: Vote[] = [];


  clicSuppr(i: number) {
    //let x: number = this.listVotes.findIndex(i => i == vote);
    this.listVotes.splice(i, 1);
  }

  constructor(private _srv: DataService) { }

  ngOnInit() {
    this._srv.votesObs.subscribe(
      value => this.listVotes.push(value)
    )
  }
}
