import { Spectator, SpyObject, createComponentFactory, mockProvider } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { of } from 'rxjs';
import { CandidateStoreService } from 'src/app/common/state/candidate-store.service';
import { VoterStoreService } from 'src/app/common/state/voter-store.service';
import { CandidatesTableComponent } from 'src/app/presentational/candidates-table/candidates-table.component';
import { VotersTableComponent } from 'src/app/presentational/voters-table/voters-table.component';
import { DialogService } from 'src/app/utils/dialog/dialog.service';
import { OverviewComponent } from './overview.component';

describe('OverviewComponent', () => {
  let spectator: Spectator<OverviewComponent>;
  let component: OverviewComponent;

  let voterStoreService: SpyObject<VoterStoreService>;
  let candidateStoreService: SpyObject<CandidateStoreService>;

  const createComponent = createComponentFactory({
    component: OverviewComponent,
    declarations: [
      MockComponent(VotersTableComponent),
      MockComponent(CandidatesTableComponent)],
    providers: [
      mockProvider(DialogService, {
        openVoterCreationDialog: () => {
          return {
            afterClosed: () => {
              return of({ name: 'John' })
            }
          }
        },
        openCandidateCreationDialog: () => {
          return {
            afterClosed: () => {
              return of({ name: 'Newman' })
            }
          }
        }
      }),
      mockProvider(VoterStoreService),
      mockProvider(CandidateStoreService)
    ]
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
    voterStoreService = spectator.inject(VoterStoreService);
    candidateStoreService = spectator.inject(CandidateStoreService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add candidate', () => {
    component.addCandidate();

    expect(candidateStoreService.addCandidate).toHaveBeenCalled()
    expect(candidateStoreService.addCandidate).toHaveBeenCalledWith({ name: "Newman", numOfVotes: 0 })
  });

  it('should add voter', () => {
    component.addVoter();

    expect(voterStoreService.addVoter).toHaveBeenCalled()
    expect(voterStoreService.addVoter).toHaveBeenCalledWith({ name: "John", voted: false })
  });
});
