import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})

export class CollegueComponent implements OnInit {

  @Input() collegue: Collegue
  likeActif = true;
  unlikeActif = true;

  onVoted(avis: Avis) {

    this._srv.donnerUnAvis(this.collegue, avis).subscribe(
      value => this.collegue = value
    );
    this.gererActivationButton();
  }

  gererActivationButton() {

    this.likeActif = this.collegue.score < 100;
    this.unlikeActif = this.collegue.score > -100;
  }

  constructor(private _srv: DataService) { }

  ngOnInit() {

    this.gererActivationButton();
  }

}
