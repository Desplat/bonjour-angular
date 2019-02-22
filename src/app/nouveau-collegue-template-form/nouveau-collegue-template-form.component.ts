import { Component, OnInit } from '@angular/core';
import { ModelCollegue } from '../models';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.css']
})
export class NouveauCollegueTemplateFormComponent implements OnInit {

  modelCollegue: ModelCollegue = new ModelCollegue();
  collegueNotFound = false;
  btnSubmitActif = true;

  constructor(private _srv: DataService, private _router: Router) { }

  ngOnInit() {
  }

  valider() {

    this._srv.ajoutCollegue(this.modelCollegue).subscribe(
      data => {
        this._router.navigate(['/accueil']);
        this._srv.rafraichir();
      },
      error => {
        console.log("ERROR");
        this.collegueNotFound = true;
      })
  }
}
