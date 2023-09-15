import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Candidate } from 'src/app/model/candidate';

export const CANDIDATE_STORE_INITIAL_STATE: Candidate[] = [
  { name: 'Johnny Bravo', numOfVotes: 2 },
  { name: 'Pluto', numOfVotes: 5 },
];

@Injectable({
  providedIn: 'root',
})
export class CandidateStoreService {
  private _candidates: BehaviorSubject<Candidate[]> = new BehaviorSubject<Candidate[]>(CANDIDATE_STORE_INITIAL_STATE);
  public readonly candidates$: Observable<Candidate[]> = this._candidates.asObservable();

  addCandidate(candidate: Candidate): void {
    this._candidates.next([...this._candidates.getValue(), candidate]);
  }

  increaseVotesNumber(candidateName: string): void {
    const currentCandidates: Candidate[] = this._candidates.getValue();

    const candidate = currentCandidates.find(candidate => candidate.name === candidateName) ?? { name: candidateName, numOfVotes: 0 };
    const newCandidates = currentCandidates.filter(candidate => candidate.name !== candidateName);
    candidate.numOfVotes += 1;

    this._candidates.next([...newCandidates, candidate]);
  }
}
