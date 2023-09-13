import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Candidate } from 'src/app/model/candidate';
import { Voter } from 'src/app/model/voter';

@Component({
  selector: 'app-voting-form',
  templateUrl: './voting-form.component.html',
  styleUrls: ['./voting-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VotingFormComponent {

  @Input() voters: Voter[] = [];
  @Input() candidates: Candidate[] = [];

  @Output() voteEvent: EventEmitter<{ voter: string, candidate: string }> = new EventEmitter();

  votingForm: FormGroup = this.formBuilder.group({
    voter: ['', [Validators.required]],
    candidate: ['', [Validators.required]]
  })

  constructor(private formBuilder: FormBuilder) {

  }

  submit(): void {
    this.voteEvent.emit(this.votingForm.value);
  }
}
