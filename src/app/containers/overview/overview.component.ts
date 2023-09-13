import { Component } from '@angular/core';
import { CandidateStoreService } from 'src/app/common/state/candidate-store.service';
import { Candidate } from 'src/app/model/candidate';
import { Observable } from 'rxjs';
import { VoterStoreService } from '../../common/state/voter-store.service';
import { Voter } from 'src/app/model/voter';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {

  candidates$: Observable<Candidate[]> = this.candidateStoreService.candidates$;
  voters$: Observable<Voter[]> = this.voterStoreService.voters$;

  constructor(private candidateStoreService: CandidateStoreService, private voterStoreService: VoterStoreService) { }


  addCandidate() {
    this.candidateStoreService.addCandidate({ name: 'lol', numOfVotes: 0 });
  }

  addVoter() {
    this.voterStoreService.addVoter({ name: 'lol', voted: false });
  }
}
