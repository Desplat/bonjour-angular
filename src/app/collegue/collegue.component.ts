import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../models';

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

    if (avis === Avis.AIMER) {
      this.collegue.score++;
    } else if (avis === Avis.DETESTER) {
      this.collegue.score--;
    }

    this.gererActivationButton();
  }

  gererActivationButton() {

    this.likeActif = this.collegue.score < 10;
    this.unlikeActif = this.collegue.score > -10;
  }

  constructor() { }

  ngOnInit() {

    this.gererActivationButton();
  }

}
