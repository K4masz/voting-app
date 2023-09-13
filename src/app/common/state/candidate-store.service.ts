import { Injectable } from '@angular/core';
import { Candidate } from 'src/app/model/candidate';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateStoreService {

  private _candidates: BehaviorSubject<Candidate[]> = new BehaviorSubject<Candidate[]>([]);
  public readonly candidates$: Observable<Candidate[]> = this._candidates.asObservable();

  constructor() {
    this._candidates.next([
      { name: 'Johnny Bravo', numOfVotes: 2 },
      { name: 'Pluto', numOfVotes: 5 }
    ]);
  }

  addCandidate(candidate: Candidate){
    this._candidates.next([...this._candidates.getValue(), candidate])
  }

}
