import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, map, take } from 'rxjs';
import { Candidate } from '../../model/candidate';
import { Voter } from '../../model/voter';
import { CandidateStoreService } from '../state/candidate-store.service';
import { VoterStoreService } from '../state/voter-store.service';

export function checkIfVoterNameUnique(service: VoterStoreService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return service.voters$.pipe(
      take(1),
      map((voters: Voter[]) => voters.map((voters: Voter) => voters.name)
        ),
        map((names: string[]) => names.includes(control.value) ? {'not-unique': true } : null)
    );
  }
}

export function checkIfCandidateNameUnique(service: CandidateStoreService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return service.candidates$.pipe(
      take(1),
      map((candidates: Candidate[]) => candidates.map((candidate: Candidate) => candidate.name)
        ),
        map((names: string[]) => names.includes(control.value) ? {'not-unique': true } : null)
    );
  }
}
