import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'

@Component({
  selector: 'app-vote-effectue',
  templateUrl: './vote-effectue.component.html',
  styleUrls: ['./vote-effectue.component.css']
})
export class VoteEffectueComponent implements OnInit {

  msg: string;
  constructor(private _srv: DataService) { }

  ngOnInit() {

    this._srv.votesObs.subscribe(
      voteSupprime => {
        this.msg = `Un vote a été supprimé. collegue = ${voteSupprime.collegue.pseudo}, avis= ${voteSupprime.avis}`;
      },
      err => console.log(err)
    );
  }
}
