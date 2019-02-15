import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bonjour-angular';
  collegueTest: Collegue = {
    pseudo: 'Matthieu',
    score: 80,
    photoUrl: 'maPhoto'
  }
}
