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
  focus: number = 1;

  clic1() {

    this.debut = 0;
    this.fin = 3;
    this.focus = 1;
  }

  clic2() {
    this.debut = 3;
    this.fin = 6;
    this.focus = 2;
  }

  clic3() {
    this.debut = 6;
    this.fin = 9;
    this.focus = 3;
  }

  constructor() { }

  ngOnInit() {
  }

}
