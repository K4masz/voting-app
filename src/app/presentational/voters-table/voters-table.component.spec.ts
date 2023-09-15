
import { MatTableModule } from '@angular/material/table';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { VotersTableComponent } from './voters-table.component';

describe('VotersTableComponent', () => {
  let spectator: Spectator<VotersTableComponent>;
  let component: VotersTableComponent;

  let createComponent = createComponentFactory({ component: VotersTableComponent, imports: [MatTableModule] })

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render table correctly', () => {
    expect(spectator.query('table')).toBeTruthy()
  })

  it('should properly emit event about adding new voter', () => {
    let spy = jest.spyOn(component.addVoterEvent, 'emit');

    component.addVoter();
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
  })
});
