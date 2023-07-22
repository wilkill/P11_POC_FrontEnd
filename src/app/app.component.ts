import { Component, OnInit } from '@angular/core';
import { MedheadGPS } from './model/medhead-gps.mobel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'MedHead Frontend';
  mymedheadGPS!: MedheadGPS;

  ngOnInit() {
    this.mymedheadGPS = {
      title: 'Module de recherche d\'hopital le plus proche',
      description: 'Appel via API la methode backend de recherche avec Google API'
  };

  }
  
}
