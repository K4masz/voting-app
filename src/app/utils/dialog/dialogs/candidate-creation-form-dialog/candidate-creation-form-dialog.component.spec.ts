import { ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogActions, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { Spectator, SpyObject, createComponentFactory, mockProvider } from '@ngneat/spectator/jest';
import { MockComponent, MockDirective } from 'ng-mocks';
import { CandidateStoreService } from 'src/app/common/state/candidate-store.service';
import { checkIfCandidateNameUnique } from 'src/app/common/validators/validators';
import { CandidateCreationFormDialogComponent } from './candidate-creation-form-dialog.component';


describe('CandidateCreationFormDialogComponent', () => {
  let spectator: Spectator<CandidateCreationFormDialogComponent>;
  let component: CandidateCreationFormDialogComponent;

  let candidateStoreService: SpyObject<CandidateStoreService>;

  const createComponent = createComponentFactory({ component: CandidateCreationFormDialogComponent, providers: [mockProvider(CandidateStoreService)], imports: [ReactiveFormsModule], declarations: [MockComponent(MatFormField), MockDirective(MatDialogContent), MockDirective(MatLabel), MockDirective(MatError), MockDirective(MatDialogActions), MockDirective(MatDialogClose)] });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
    candidateStoreService = spectator.inject(CandidateStoreService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create formGroup correctly', () => {
    expect(component.theForm).toBeTruthy();

    const nameFormControl = component.theForm.controls['name'];

    expect(nameFormControl).toBeTruthy()
    expect(nameFormControl.hasValidator(Validators.required)).toBeTruthy();
    expect(nameFormControl.hasAsyncValidator(checkIfCandidateNameUnique(candidateStoreService)));
  });

});
