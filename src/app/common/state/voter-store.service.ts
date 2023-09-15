import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Voter } from 'src/app/model/voter';

export const VOTER_STORE_INITAL_STATE: Voter[] = [
  { name: 'Peppa', voted: false },
  { name: 'Rebel', voted: true },
  { name: 'Rumcajs', voted: false },
];

@Injectable({
  providedIn: 'root',
})
export class VoterStoreService {
  private _voters: BehaviorSubject<Voter[]> = new BehaviorSubject<Voter[]>(VOTER_STORE_INITAL_STATE);
  public readonly voters$: Observable<Voter[]> = this._voters.asObservable();

  addVoter(data: Voter): void {
    this._voters.next([...this._voters.getValue(), data]);
  }

  markAsHasVoted(voterName: string): void {
    const currentVoters: Voter[] = this._voters.getValue();

    const voter = currentVoters.find(voter => voter.name === voterName) ?? { name: voterName, voted: false };
    const newVoters = currentVoters.filter(voter => voter.name !== voterName);
    voter.voted = true;

    this._voters.next([...newVoters, voter]);
  }
}
