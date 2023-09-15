import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { MockComponent } from 'ng-mocks';
import { AppComponent } from './app.component';
import { OverviewComponent } from './containers/overview/overview.component';
import { VotingComponent } from './containers/voting/voting.component';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({ component: AppComponent, declarations: [MockComponent(OverviewComponent), MockComponent(VotingComponent)] });

  beforeEach(() => (spectator = createComponent()));

  it('should create the app', () => {
    expect(spectator).toBeTruthy();
  });

  it(`should have as title 'Voting app'`, () => {
    const component = spectator.component;
    expect(component.title).toEqual('Voting app');
  });

  describe('render', () => {
    it('should render title', () => {
      expect(spectator.query('h1')?.textContent).toContain('Voting app');
    });

    it('should render app-overview', () => {
      expect(spectator.query('app-overview')).toBeTruthy();
    });

    it('should render the divider', () => {
      expect(spectator.query('hr')).toBeTruthy();
    });

    it('should render app-voting', () => {
      expect(spectator.query('app-voting')).toBeTruthy();
    });
  });
});
