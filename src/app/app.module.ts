import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OverviewComponent } from './containers/overview/overview.component';
import { VotingComponent } from './containers/voting/voting.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { VotersTableComponent } from './presentational/voters-table/voters-table.component';
import { CandidatesTableComponent } from './presentational/candidates-table/candidates-table.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { VotingFormComponent } from './presentational/voting-form/voting-form.component';


@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    VotingComponent,
    VotingFormComponent,
    VotersTableComponent,
    CandidatesTableComponent
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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
