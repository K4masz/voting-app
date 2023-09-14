import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterCreationFormDialogComponent } from './voter-creation-form-dialog.component';

describe('VoterCreationFormDialogComponent', () => {
  let component: VoterCreationFormDialogComponent;
  let fixture: ComponentFixture<VoterCreationFormDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoterCreationFormDialogComponent]
    });
    fixture = TestBed.createComponent(VoterCreationFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
