import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotersTableComponent } from './voters-table.component';

describe('VotersTableComponent', () => {
  let component: VotersTableComponent;
  let fixture: ComponentFixture<VotersTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotersTableComponent]
    });
    fixture = TestBed.createComponent(VotersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
