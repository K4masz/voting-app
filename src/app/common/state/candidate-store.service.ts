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

  addCandidate(candidate: Candidate): void {
    this._candidates.next([...this._candidates.getValue(), candidate])
  }

  increaseVotesNumber(candidateName: string): void {

    const currentCandidates: Candidate[] = this._candidates.getValue();

    const candidate = currentCandidates.find(candidate => candidate.name === candidateName)!;
    const newCandidates = currentCandidates.filter(candidate => candidate.name !== candidateName);
    candidate.numOfVotes += 1;

    this._candidates.next([...newCandidates, candidate])
  }

}
