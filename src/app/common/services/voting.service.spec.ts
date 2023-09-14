
import { SpectatorService, SpyObject, createServiceFactory, mockProvider } from '@ngneat/spectator/jest';
import { Vote } from 'src/app/model/vote';
import { CandidateStoreService } from '../state/candidate-store.service';
import { VoterStoreService } from '../state/voter-store.service';
import { VotingService } from './voting.service';

describe('VotingService', () => {
  let spectator: SpectatorService<VotingService>;
  let service: VotingService;

  let candidateStoreService: SpyObject<CandidateStoreService>;
  let voterStoreService: SpyObject<VoterStoreService>;

  const createService = createServiceFactory({service: VotingService, providers: [mockProvider(CandidateStoreService), mockProvider(VoterStoreService)]});

  beforeEach(() => {
    spectator = createService();
    service = spectator.service;
    candidateStoreService = spectator.inject(CandidateStoreService);
    voterStoreService = spectator.inject(VoterStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should place a vote', () => {
    const vote: Vote = { voter: 'ala', candidate: 'kot'}

    service.placeVote(vote)
    expect(candidateStoreService.increaseVotesNumber).toHaveBeenCalledWith(vote.candidate);
    expect(voterStoreService.markAsHasVoted).toHaveBeenCalledWith(vote.voter);
  });
});
