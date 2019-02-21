import { Component, OnInit } from '@angular/core';
import { ModelCollegue } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.css']
})
export class NouveauCollegueTemplateFormComponent implements OnInit {

  modelCollegue: ModelCollegue = new ModelCollegue();
  btnSubmitActif = true;

  constructor(private _srv: DataService) { }

  ngOnInit() {
  }

  valider() {
    this._srv.ajoutCollegue(this.modelCollegue);
  }
}
