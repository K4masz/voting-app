import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Voter } from 'src/app/model/voter';

@Injectable({
  providedIn: 'root'
})
export class VoterStoreService {

  private _voters: BehaviorSubject<Voter[]> = new BehaviorSubject<Voter[]>([]);
  public readonly voters$: Observable<Voter[]> = this._voters.asObservable();

  constructor() {
    this._voters.next([
      { name: 'Peppa', voted: false },
      { name: 'Rumcajs', voted: false }
    ])
  }

  addVoter(data: Voter){
    this._voters.next([...this._voters.getValue(), data])
  }

}
