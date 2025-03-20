import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel, Idesignation } from '../model/interface/role';
import { environment } from '../../environments/environment.development';

@Injectable({ // this is an service decorator , this contains the meta data about the service , the injectable keyword lets the compiler know that this injected in components
  providedIn: 'root' // this basically means where the service is provided , root means that is present in the root folder/ throughout the project 
})
export class MasterService { 

  constructor(private http:HttpClient) { }
  getDesignation():Observable<Idesignation[]>{
    return this.http.get<Idesignation[]>(environment.API_URL+"designations") // here the get is an generic
  }
  // this is supposed to be how it was done i had to make the change because of the json response from the server 
  // getDesignation():Observable<APIResponseModel>{
  //   return this.http.get<APIResponseModel>("api link") // here the get is an generic
  // }

}
