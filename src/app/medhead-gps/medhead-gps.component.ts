import { Component ,OnInit, Input} from '@angular/core';
import { MedheadGPS } from '../model/medhead-gps.mobel';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { Hospital } from '../model/medhead-hospital.model';
import { MedHeadService } from '../services/medhead-service';
import { Specialization } from '../model/medhead-specialization.model';

@Component({
  selector: 'app-medhead-gps',
  templateUrl: './medhead-gps.component.html',
  styleUrls: ['./medhead-gps.component.scss']
})
export class MedheadGPSComponent implements OnInit{
  medheadGPS!:MedheadGPS;
  
  hopistal$!: Observable<Hospital>;
  specialization$!:  Observable<Specialization[]>;

  constructor(private medheadService : MedHeadService) {}

  title!: string;
  description!: string;
  specialization!: number;
  latitude!: number;
  longitude!: number;
  
  ngOnInit(){
  
    this.title = 'Module de recherche d\'hopital le plus proche';
    this.description =  'Appel via API la methode backend de recherche avec Google API';
    this.specialization$ = this.medheadService.getSpecialization();

    //for testing : examples values
    this.latitude = -21.114302; //for testing
    this.longitude = 55.654626; // for testing
    this.specialization = 17; // for testing

  }
  
  onSubmitForm(form: NgForm): void{
    if(form.valid){
      console.log('Valide : ' + JSON.stringify(form.value));
      this.hopistal$ = this.medheadService.getTheClosestHospital(form.value);
    }
    
  }
}
