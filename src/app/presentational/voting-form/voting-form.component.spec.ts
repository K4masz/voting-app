
import { AbstractControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogActions, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { Spectator, createComponentFactory, mockProvider } from '@ngneat/spectator/jest';
import { MockComponent, MockDirective } from 'ng-mocks';
import { CandidateStoreService } from 'src/app/common/state/candidate-store.service';

import { MatSelect } from '@angular/material/select';
import { VotingFormComponent } from './voting-form.component';

describe('VotingFormComponent', () => {
  let spectator: Spectator<VotingFormComponent>;
  let component: VotingFormComponent;

  const createComponent = createComponentFactory({
    component: VotingFormComponent, imports: [ReactiveFormsModule], providers: [mockProvider(CandidateStoreService)],

    declarations: [MockComponent(MatSelect), MockComponent(MatFormField), MockDirective(MatDialogContent), MockDirective(MatLabel), MockDirective(MatError), MockDirective(MatDialogActions), MockDirective(MatDialogClose)]
  })
  beforeEach(() => {

    spectator = createComponent();
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('form', () => {
    let voterControl: AbstractControl;
    let candidateControl: AbstractControl;

    beforeEach(() => {
      voterControl = component.votingForm.controls['voter'];
      candidateControl = component.votingForm.controls['candidate'];
    })

    it('should create form correctly', () => {
      expect(component.votingForm).toBeTruthy();

      expect(voterControl).toBeTruthy()
      expect(voterControl.hasValidator(Validators.required)).toBeTruthy();

      expect(candidateControl).toBeTruthy()
      expect(candidateControl.hasValidator(Validators.required)).toBeTruthy();
    })

    it('should display error', () => {
      voterControl.setErrors({ required: true })
      spectator.detectChanges();
      expect(spectator.query('mat-error')).toBeTruthy();
    });

    it('should emit value correctly', () => {
      const spy = jest.spyOn(component.voteEvent, 'emit');

      component.votingForm.setValue({ voter: 'John', candidate: 'newman' });
      component.submit();

      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith({ voter: 'John', candidate: 'newman' });
    });
  });

});
