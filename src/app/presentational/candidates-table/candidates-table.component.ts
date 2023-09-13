import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Candidate } from 'src/app/model/candidate';

@Component({
  selector: 'app-candidates-table',
  templateUrl: './candidates-table.component.html',
  styleUrls: ['./candidates-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CandidatesTableComponent {
  @Input('dataSource') dataSource: Candidate[] = []
}
