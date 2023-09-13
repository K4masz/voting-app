import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  votingForm:FormGroup = this.formBuilder.group({
    voter: [''],
    candidate: ['']
  })

constructor(private formBuilder: FormBuilder){

}

submit(){
  console.log(this.votingForm.value)
}
}
