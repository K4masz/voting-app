import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateCreationFormDialogComponent } from './candidate-creation-form-dialog.component';

describe('CandidateCreationFormDialogComponent', () => {
  let component: CandidateCreationFormDialogComponent;
  let fixture: ComponentFixture<CandidateCreationFormDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateCreationFormDialogComponent]
    });
    fixture = TestBed.createComponent(CandidateCreationFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
