import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {

  votersTableColumns = ['name', 'voted'];

  dummyVoters = [
    { name: 'Peppa', voted: false },
    { name: 'Rumcajs', voted: false }
  ];

  candidateTablesColumns = ['name', 'numOfVotes'];

  dummyCandidates = [
    { name: 'Johnny Bravo', numOfVotes: 2 },
    { name: 'Pluto', numOfVotes: 5 }
  ];

}
