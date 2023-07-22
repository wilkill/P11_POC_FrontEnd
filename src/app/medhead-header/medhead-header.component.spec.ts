import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedheadHeaderComponent } from './medhead-header.component';

describe('MedheadHeaderComponent', () => {
  let component: MedheadHeaderComponent;
  let fixture: ComponentFixture<MedheadHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedheadHeaderComponent]
    });
    fixture = TestBed.createComponent(MedheadHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
