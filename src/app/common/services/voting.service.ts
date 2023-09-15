import { Injectable } from '@angular/core';
import { Vote } from 'src/app/model/vote';
import { CandidateStoreService } from '../state/candidate-store.service';
import { VoterStoreService } from '../state/voter-store.service';

@Injectable({
  providedIn: 'root',
})
export class VotingService {
  constructor(
    private candidateStoreService: CandidateStoreService,
    private voterStoreService: VoterStoreService
  ) {}

  placeVote(vote: Vote) {
    this.candidateStoreService.increaseVotesNumber(vote.candidate);
    this.voterStoreService.markAsHasVoted(vote.voter);
  }
}
