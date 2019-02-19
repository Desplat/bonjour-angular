import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-accueil-component',
  templateUrl: './accueil-component.component.html',
  styleUrls: ['./accueil-component.component.css']
})
export class AccueilComponentComponent implements OnInit {

  listCol: Collegue[] = this._srv.lister();

  clicRafraichir() {

  }
  constructor(private _srv: DataService) { }

  ngOnInit() {
  }

}
