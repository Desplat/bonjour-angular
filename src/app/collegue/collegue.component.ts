import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})

export class CollegueComponent implements OnInit {

  @Input() collegue: Collegue

  constructor() { }

  ngOnInit() {
  }

}
