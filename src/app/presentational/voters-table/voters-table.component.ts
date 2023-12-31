import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Voter } from 'src/app/model/voter';

@Component({
  selector: 'app-voters-table',
  templateUrl: './voters-table.component.html',
  styleUrls: ['./voters-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VotersTableComponent {
  @Input() dataSource: Voter[] = [];

  @Output() addVoterEvent: EventEmitter<void> = new EventEmitter<void>();

  votersTableColumns = ['name', 'voted'];

  addVoter() {
    this.addVoterEvent.emit();
  }
}
