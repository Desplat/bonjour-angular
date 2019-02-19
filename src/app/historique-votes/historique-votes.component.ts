import { Component, OnInit } from '@angular/core';
import { Vote, Avis } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.css']
})
export class HistoriqueVotesComponent implements OnInit {

  Avis = Avis;

  listVotes: Vote[];


  clicSuppr(vote: Vote) {
    let x: number = this.listVotes.findIndex(i => i == vote);
    this._srv.supprimerVote(this.listVotes[x]);
    this.listVotes.splice(x, 1);
  }

  constructor(private _srv: DataService) { }

  ngOnInit() {
    this._srv.listerVotes().subscribe(
      value => this.listVotes = value
    )
  }

}
