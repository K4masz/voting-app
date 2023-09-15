import { Spectator, SpyObject, createComponentFactory, mockProvider } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { VotingService } from 'src/app/common/services/voting.service';
import { Vote } from 'src/app/model/vote';
import { VotingFormComponent } from 'src/app/presentational/voting-form/voting-form.component';
import { VotingComponent } from './voting.component';

describe('VotingComponent', () => {
  let spectator: Spectator<VotingComponent>;
  let component: VotingComponent;

  let votingService: SpyObject<VotingService>;

  const createComponent = createComponentFactory({ component: VotingComponent, imports: [MockComponent(VotingFormComponent)], providers: [mockProvider(VotingService)] });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
    votingService = spectator.inject(VotingService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should place a vote', () => {
    const vote: Vote = { voter: 'John', candidate: 'newman' };
    component.onVote(vote);

    expect(votingService.placeVote).toHaveBeenCalled();
    expect(votingService.placeVote).toHaveBeenCalledWith(vote);
  });
});
