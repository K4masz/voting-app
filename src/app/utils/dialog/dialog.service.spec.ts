import { MatDialog } from '@angular/material/dialog';
import { SpectatorService, SpyObject, createServiceFactory, mockProvider } from '@ngneat/spectator/jest';
import { DialogService } from './dialog.service';
import { CandidateCreationFormDialogComponent } from './dialogs/candidate-creation-form-dialog/candidate-creation-form-dialog.component';
import { VoterCreationFormDialogComponent } from './dialogs/voter-creation-form-dialog/voter-creation-form-dialog.component';

describe('DialogService', () => {
  let spectator: SpectatorService<DialogService>;
  let service: DialogService;

  let dialog: SpyObject<MatDialog>;

  const createService = createServiceFactory({ service: DialogService, providers: [mockProvider(MatDialog)] });

  beforeEach(() => {
    spectator = createService();
    service = spectator.service;
    dialog = spectator.inject(MatDialog);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should open candidate creation dialog', () => {
    service.openCandidateCreationDialog();

    expect(dialog.open).toHaveBeenCalled();
    expect(dialog.open).toHaveBeenCalledWith(CandidateCreationFormDialogComponent);
  });

  it('should open voter creation dialog', () => {
    service.openVoterCreationDialog();

    expect(dialog.open).toHaveBeenCalled();
    expect(dialog.open).toHaveBeenCalledWith(VoterCreationFormDialogComponent);
  });
});
