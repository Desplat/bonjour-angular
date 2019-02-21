import { Injectable } from '@angular/core';
import { Collegue, Avis, Vote } from '../models';
import { Observable, from, Subject, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const URL_BACKEND = environment.backendUrl;

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private votesSub = new Subject<Vote>();

  get votesObs() {
    return this.votesSub;
  }

  // alimenter la liste de collègues
  listeCollegues: Collegue[] = [];

  constructor(private _http: HttpClient) { }

  lister(): Observable<Collegue[]> {

    if (this.listeCollegues.length > 0) {
      return of(this.listeCollegues)
    } else {
      return this._http.get<Collegue[]>(`${URL_BACKEND}/collegues`)
        .pipe(
          // comme peek avec les streams Java 8
          tap(tableau => this.listeCollegues = tableau)
        )
    }

    /*return this.listeCollegues.length > 0 ?
      of(this.listeCollegues) :
      this._http.get<Collegue[]>(`${URL_BACKEND}/collegues`)
        .pipe(
          // comme peek avec les streams Java 8
          tap(tableau => this.listeCollegues = tableau)
        )*/

    /* amusement incomplet 
  return of(this.listeCollegues)
    .pipe(
      filter(tableau => tableau.length == 0),
      flatMap(tableau => this._http.get<Collegue[]>(`${URL_BACKEND}/collegues`)),
      tap(tableau => this.listeCollegues = tableau)
    )
    */
  }

  rafraichir(): Observable<Collegue[]> {

    this.listeCollegues = [];
    return this.lister();
  }

  donnerUnAvis(collegue: Collegue, avis: Avis): Observable<Collegue> {

    const newCollegue = { ...collegue };
    // mettre à jour le score du collègue et retourner le collègue à jour
    this.votesSub.next({ collegue: newCollegue, avis });

    return this._http.patch<Collegue>(
      `${URL_BACKEND}/collegues/${collegue.pseudo}`, `{ "action" : "${avis}" }`, httpOptions)
  }
}
