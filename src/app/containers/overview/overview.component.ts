import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable, filter } from 'rxjs';
import { CandidateStoreService } from 'src/app/common/state/candidate-store.service';
import { Candidate } from 'src/app/model/candidate';
import { Voter } from 'src/app/model/voter';
import { CandidateCreationFormDialogComponent } from 'src/app/utils/dialog/dialogs/candidate-creation-form-dialog/candidate-creation-form-dialog.component';
import { VoterCreationFormDialogComponent } from 'src/app/utils/dialog/dialogs/voter-creation-form-dialog/voter-creation-form-dialog.component';
import { VoterStoreService } from '../../common/state/voter-store.service';
import { DialogService } from '../../utils/dialog/dialog.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {

  candidates$: Observable<Candidate[]> = this.candidateStoreService.candidates$;
  voters$: Observable<Voter[]> = this.voterStoreService.voters$;

  constructor(private candidateStoreService: CandidateStoreService, private voterStoreService: VoterStoreService, private dialogService: DialogService) { }

  addCandidate() {
    const creationDialogRef: MatDialogRef<CandidateCreationFormDialogComponent> = this.dialogService.openCandidateCreationDialog();
    const afterDialogClosed$ = creationDialogRef.afterClosed();

    afterDialogClosed$.pipe(filter(value => !!value)).subscribe(
      (newCandidateData: { name: string }) => {
        const newCandidate: Candidate = { name: newCandidateData.name, numOfVotes: 0 };
        this.candidateStoreService.addCandidate(newCandidate);
      }
    );
  }

  addVoter() {
    const creationDialogRef: MatDialogRef<VoterCreationFormDialogComponent> = this.dialogService.openVoterCreationDialog();
    const afterDialogClosed$ = creationDialogRef.afterClosed();

    afterDialogClosed$.pipe(filter(value => !!value)).subscribe(
      (newVoterData: { name: string }) => {
        const newVoter: Voter = { name: newVoterData.name, voted: false };
        this.voterStoreService.addVoter(newVoter);
      }
    );
  }
}
