import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { OverviewComponent } from './containers/overview/overview.component';
import { VotingComponent } from './containers/voting/voting.component';
import { CandidatesTableComponent } from './presentational/candidates-table/candidates-table.component';
import { VotersTableComponent } from './presentational/voters-table/voters-table.component';
import { VotingFormComponent } from './presentational/voting-form/voting-form.component';
import { CandidateCreationFormDialogComponent } from './utils/dialog/dialogs/candidate-creation-form-dialog/candidate-creation-form-dialog.component';
import { VoterCreationFormDialogComponent } from './utils/dialog/dialogs/voter-creation-form-dialog/voter-creation-form-dialog.component';
import { CustomMaterialFormsMatcher } from './utils/error-state-matcher/custom-material-state-matcher';
@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    VotingComponent,
    VotingFormComponent,
    VotersTableComponent,
    CandidatesTableComponent,
    VoterCreationFormDialogComponent,
    CandidateCreationFormDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: CustomMaterialFormsMatcher }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
