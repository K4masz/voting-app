import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CandidateCreationFormDialogComponent } from './dialogs/candidate-creation-form-dialog/candidate-creation-form-dialog.component';
import { VoterCreationFormDialogComponent } from './dialogs/voter-creation-form-dialog/voter-creation-form-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openCandidateCreationDialog(): MatDialogRef<CandidateCreationFormDialogComponent> {
    return this.dialog.open(CandidateCreationFormDialogComponent);
  }

  openVoterCreationDialog(): MatDialogRef<VoterCreationFormDialogComponent> {
    return this.dialog.open(VoterCreationFormDialogComponent);
  }
}
