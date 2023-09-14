import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CandidateStoreService } from '../../../../common/state/candidate-store.service';
import { checkIfCandidateNameUnique } from '../../../../common/validators/validators';

@Component({
  selector: 'app-candidate-creation-form-dialog',
  templateUrl: './candidate-creation-form-dialog.component.html',
  styleUrls: ['./candidate-creation-form-dialog.component.scss']
})
export class CandidateCreationFormDialogComponent {

  theForm = this.formBuilder.group({
    name: ['', {validators: Validators.required, asyncValidators: checkIfCandidateNameUnique(this.candidateStoreService) }]
  });

  constructor(private formBuilder: FormBuilder, private candidateStoreService: CandidateStoreService) { }

  get nameControl(){
    return this.theForm.controls['name']
  }
}
