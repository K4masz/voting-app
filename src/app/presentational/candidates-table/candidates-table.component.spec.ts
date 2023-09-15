import { MatTableModule } from '@angular/material/table';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { CandidatesTableComponent } from './candidates-table.component';

describe('CandidatesTableComponent', () => {
  let spectator: Spectator<CandidatesTableComponent>;
  let component: CandidatesTableComponent;

  const createComponent = createComponentFactory({ component: CandidatesTableComponent, imports: [MatTableModule] });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render table correctly', () => {
    expect(spectator.query('table')).toBeTruthy();
  });

  it('should properly emit event about adding new voter', () => {
    const spy = jest.spyOn(component.addCandidateEvent, 'emit');

    component.addCandidate();
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
