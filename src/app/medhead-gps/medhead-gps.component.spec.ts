import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedheadGPSComponent } from './medhead-gps.component';

describe('MedheadGPSComponent', () => {
  let component: MedheadGPSComponent;
  let fixture: ComponentFixture<MedheadGPSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedheadGPSComponent]
    });
    fixture = TestBed.createComponent(MedheadGPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
