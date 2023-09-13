import { Component } from '@angular/core';
import { CandidateStoreService } from '../../common/state/candidate-store.service';
import { VoterStoreService } from '../../common/state/voter-store.service';
import { Voter } from 'src/app/model/voter';
import { map } from 'rxjs/operators';
import { VotingService } from 'src/app/common/services/voting.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent {

  votersNotVoted$: Observable<Voter[]> = this.voterStoreService.voters$.pipe(
    map((voters: Voter[]) => voters.filter(voter => !voter.voted))
  );

  candidates$ = this.candidateStoreService.candidates$;

  constructor(private candidateStoreService: CandidateStoreService, private voterStoreService: VoterStoreService, private votingService: VotingService) {

  }

  onVote(vote: { voter: string, candidate: string }) {
    this.votingService.placeVote(vote);
  }

}
