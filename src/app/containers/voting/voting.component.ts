import { Component } from '@angular/core';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent {

  voters = [
    { name: 'Peppa', voted: false },
    { name: 'Rumcajs', voted: false }
  ];

  candidates = [
    { name: 'Johnny Bravo', numOfVotes: 2 },
    { name: 'Pluto', numOfVotes: 5 }
  ];

  constructor() {

  }

  onVote(vote:{voter: string, candidate: string}) {
    console.log(vote)
  }

}
