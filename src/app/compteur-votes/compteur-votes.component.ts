import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compteur-votes',
  templateUrl: './compteur-votes.component.html',
  styleUrls: ['./compteur-votes.component.css']
})
export class CompteurVotesComponent implements OnInit {

  compteur: number;

  constructor() { }

  ngOnInit() {
  }

}
