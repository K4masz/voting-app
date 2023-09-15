import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Candidate } from 'src/app/model/candidate';
import { Vote } from 'src/app/model/vote';
import { Voter } from 'src/app/model/voter';

@Component({
  selector: 'app-voting-form',
  templateUrl: './voting-form.component.html',
  styleUrls: ['./voting-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VotingFormComponent {
  @Input() voters: Voter[] = [];
  @Input() candidates: Candidate[] = [];

  @Output() voteEvent: EventEmitter<Vote> = new EventEmitter<Vote>();

  votingForm: FormGroup = this.formBuilder.group({
    voter: ['', [Validators.required]],
    candidate: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder) {}

  submit(): void {
    this.voteEvent.emit(this.votingForm.value);
    this.votingForm.reset();
  }

  get voterControl() {
    return this.votingForm.controls['voter'];
  }

  get candidateControl() {
    return this.votingForm.controls['candidate'];
  }
}
