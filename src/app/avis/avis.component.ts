import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Avis } from '../models';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {

  @Output() avis: EventEmitter<Avis> = new EventEmitter<Avis>();
  @Input() btnLikeActif = true;
  @Input() btnUnlikeActif = true;

  clicAime() {

    this.avis.emit(Avis.AIMER);
  }

  clicDeteste() {

    this.avis.emit(Avis.DETESTER);
  }

  constructor() { }

  ngOnInit() {
  }
}
