import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { Voter } from 'src/app/model/voter';

@Component({
  selector: 'app-voters-table',
  templateUrl: './voters-table.component.html',
  styleUrls: ['./voters-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VotersTableComponent {
  @Input('dataSource') dataSource: Voter[] = [];

  @Output('addEvent') addVoterEvent: EventEmitter<void> = new EventEmitter<void>();

  votersTableColumns = ['name', 'voted'];

  addVoter(){
    this.addVoterEvent.emit();
  }
}