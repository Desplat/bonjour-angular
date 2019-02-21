import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-accueil-component',
  templateUrl: './accueil-component.component.html',
  styleUrls: ['./accueil-component.component.css']
})
export class AccueilComponentComponent implements OnInit {

  listCol: Collegue[];

  clicRafraichir() {

    this._srv.rafraichir().subscribe(
      value => this.listCol = value
    )
  }

  constructor(private _srv: DataService) { }

  ngOnInit() {

    this._srv.lister().subscribe(
      value => this.listCol = value
    )
  }
}
