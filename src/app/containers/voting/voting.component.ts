import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VotingService } from 'src/app/common/services/voting.service';
import { Vote } from 'src/app/model/vote';
import { Voter } from 'src/app/model/voter';
import { CandidateStoreService } from '../../common/state/candidate-store.service';
import { VoterStoreService } from '../../common/state/voter-store.service';

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

  constructor(private candidateStoreService: CandidateStoreService, private voterStoreService: VoterStoreService, private votingService: VotingService) {}

  onVote(vote: Vote) {
    this.votingService.placeVote(vote);
  }

}
