import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {

  constructor(){

  }

  dummyVoters = [
    { name: 'Peppa', voted: false },
    { name: 'Rumcajs', voted: false }
  ];

  dummyCandidates = [
    { name: 'Johnny Bravo', numOfVotes: 2 },
    { name: 'Pluto', numOfVotes: 5 }
  ];

  addCandidate(){
    this.dummyCandidates = [...this.dummyCandidates, {name: 'lol', numOfVotes: 0}]
  }

  addVoter(){
    this.dummyVoters = [...this.dummyVoters, {name: 'lol', voted: false}];
  }
}
