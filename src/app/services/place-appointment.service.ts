import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient}from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceAppointment{
  baseUrl:string;

  constructor(private httpClient:HttpClient) {
    this.baseUrl="http://localhost:9000/PlaceAppointment";
   }
   getAll():Observable<PlaceAppointment[]>{
     return this.httpClient.get<PlaceAppointment[]>(this.baseUrl);
   }
   add(empId:PlaceAppointment):Observable<PlaceAppointment>{
    return this.httpClient.post<PlaceAppointment>(this.baseUrl,empId);
   }
   save(empId:PlaceAppointment):Observable<PlaceAppointment>{
    return this.httpClient.put<PlaceAppointment>(this.baseUrl,empId);
   }

   delete(empId:PlaceAppointment):Observable<void>{
    return this.httpClient.delete<void>(`${this.baseUrl}/${empId}`)
   }

   

    
}