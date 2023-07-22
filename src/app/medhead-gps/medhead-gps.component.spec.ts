import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedheadGPSComponent } from './medhead-gps.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule} from '@angular/forms';

describe('MedheadGPSComponent', () => {
  let component: MedheadGPSComponent;
  let fixture: ComponentFixture<MedheadGPSComponent>;

  beforeEach(async() => {
    
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,FormsModule],
      declarations: [MedheadGPSComponent]
    });
    fixture = TestBed.createComponent(MedheadGPSComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
