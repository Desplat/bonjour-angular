import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css'],
  template: `<button (click)="quandOnClique()">Clic</button>`
})
export class AvisComponent implements OnInit {

  quandOnClique() {

    console.log("Mr l'utilisateur, vous venez de cliquer");
  }
  constructor() { }

  ngOnInit() {
  }

}
