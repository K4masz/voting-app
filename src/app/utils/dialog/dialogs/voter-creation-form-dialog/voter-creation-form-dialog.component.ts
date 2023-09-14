import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { VoterStoreService } from 'src/app/common/state/voter-store.service';
import { checkIfVoterNameUnique } from 'src/app/common/validators/validators';

@Component({
  selector: 'app-voter-creation-form-dialog',
  templateUrl: './voter-creation-form-dialog.component.html',
  styleUrls: ['./voter-creation-form-dialog.component.scss']
})
export class VoterCreationFormDialogComponent {

  theForm = this.formBuilder.group({
    name: ['', { validators: Validators.required, asyncValidators: checkIfVoterNameUnique(this.voterStoreService) }]
  })

  constructor(private formBuilder: FormBuilder, private voterStoreService: VoterStoreService) { }

  get nameControl() {
    return this.theForm.controls['name']
  }
}
