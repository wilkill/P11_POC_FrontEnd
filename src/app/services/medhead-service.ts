import { HttpClient ,HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError } from "rxjs";
import { Hospital } from "../model/medhead-hospital.model";
import { NgForm } from "@angular/forms";
import { Specialization } from "../model/medhead-specialization.model";

@Injectable({
    providedIn: 'root'
})

export class MedHeadService{

    baseApiUrl = 'http://127.0.0.1:9000/';
    apiGoogle = 'api/getclosesthospitalbygoogleapi';
    apiSpecialisation = 'specializations';
    
    constructor(private http: HttpClient){}


    getTheClosestHospital(form: NgForm ): Observable<Hospital>{
        const headers = new HttpHeaders({ 'content-type': 'application/json','Access-Control-Allow-Origin': '*'}  );
        const options = { headers: headers };
        const body=JSON.stringify(form);
        return this.http.post<Hospital>(this.baseApiUrl+this.apiGoogle,body,options);
    
    }

    getSpecialization(): Observable<Specialization[]>{
        const headers = new HttpHeaders({ 'content-type': 'application/json','Access-Control-Allow-Origin': '*'}  );
        const options = { headers: headers };
        return this.http.get<Specialization[]>(this.baseApiUrl+this.apiSpecialisation,options);
    
    }

}

