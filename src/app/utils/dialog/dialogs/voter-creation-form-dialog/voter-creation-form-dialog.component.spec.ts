import { ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogActions, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { Spectator, SpyObject, createComponentFactory, mockProvider } from '@ngneat/spectator/jest';
import { MockComponent, MockDirective } from 'ng-mocks';
import { VoterStoreService } from 'src/app/common/state/voter-store.service';
import { checkIfVoterNameUnique } from 'src/app/common/validators/validators';
import { VoterCreationFormDialogComponent } from './voter-creation-form-dialog.component';

describe('VoterCreationFormDialogComponent', () => {
  let spectator: Spectator<VoterCreationFormDialogComponent>;
  let component: VoterCreationFormDialogComponent;

  let candidateStoreService: SpyObject<VoterStoreService>;

  const createComponent = createComponentFactory({component: VoterCreationFormDialogComponent, providers:[mockProvider(VoterStoreService)], imports:[ReactiveFormsModule], declarations:[MockComponent(MatFormField),MockDirective(MatDialogContent), MockDirective(MatLabel), MockDirective(MatError), MockDirective(MatDialogActions), MockDirective(MatDialogClose)]});

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
    candidateStoreService = spectator.inject(VoterStoreService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create formGroup correctly', () => {
    expect(component.theForm).toBeTruthy();

    const nameFormControl = component.theForm.controls['name'];

    expect(nameFormControl).toBeTruthy()
    expect(nameFormControl.hasValidator(Validators.required)).toBeTruthy();
    expect(nameFormControl.hasAsyncValidator(checkIfVoterNameUnique(candidateStoreService)));
  });

});
