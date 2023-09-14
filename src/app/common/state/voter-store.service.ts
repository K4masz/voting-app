import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Voter } from 'src/app/model/voter';

export const VOTER_STORE_INITAL_STATE: Voter[] = [
  { name: 'Peppa', voted: false },
  { name: 'Rumcajs', voted: false },
  { name: 'Rebel', voted: true }
]

@Injectable({
  providedIn: 'root'
})
export class VoterStoreService {

  private _voters: BehaviorSubject<Voter[]> = new BehaviorSubject<Voter[]>(VOTER_STORE_INITAL_STATE);
  public readonly voters$: Observable<Voter[]> = this._voters.asObservable();

  constructor() { }

  addVoter(data: Voter): void {
    this._voters.next([...this._voters.getValue(), data])
  }

  markAsHasVoted(voterName: string): void {
    const currentVoters: Voter[] = this._voters.getValue();

    const voter = currentVoters.find(voter => voter.name === voterName)!;
    const newVoters = currentVoters.filter(voter => voter.name !== voterName);
    voter.voted = true;

    this._voters.next([...newVoters, voter]);
  }

}
