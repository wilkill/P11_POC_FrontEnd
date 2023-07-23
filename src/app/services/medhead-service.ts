import { HttpClient ,HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, throwError } from "rxjs";
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
        return this.http.post<Hospital>(this.baseApiUrl+this.apiGoogle,body,options).pipe(
            map((response: any) => {
                if(response === null || response === ''){
                    this.showErrorMessage('Aucun hôpital avec des lits disponibles.'); 
                }
                return response;
             }),
             catchError((error) => {
                 // Handle error response here
                 console.error('Error:', error);
 
                 this.showErrorMessage('Une erreur technique est survenue,merci de réessayer ultérieurement.');
                 // Return an Observable containing the error message
                 return throwError(() => new Error('An error occurred while processing the request.'));
             })
        );
        
    }

    getSpecialization(): Observable<Specialization[]>{
        const headers = new HttpHeaders({ 'content-type': 'application/json','Access-Control-Allow-Origin': '*'}  );
        const options = { headers: headers };
        return this.http.get<Specialization[]>(this.baseApiUrl+this.apiSpecialisation,options).pipe(
            map((response: any) => {
                if(response === null || response === ''){
                    this.showErrorMessage('Aucune Specialisation n\'est présente');
                }
                return response;
             }),
            catchError((error) => {
                // Handle error response here
                console.error('Error:', error);

                this.showErrorMessage('Une erreur technique est survenue,merci de réessayer ultérieurement.');
                // Return an Observable containing the error message
                return throwError(() => new Error('An error occurred while processing the request.'));
            })

        )
   
    }

    showErrorMessage(message: string) {
        // Display the error message using an alert
        alert(message);
      }

}

