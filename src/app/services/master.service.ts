import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../model/interface/role';

@Injectable({ // this is an service decorator , this contains the meta data about the service , the injectable keyword lets the compiler know that this injected in components
  providedIn: 'root' // this basically means where the service is provided , root means that is present in the root folder/ throughout the project 
})
export class MasterService { 

  constructor(private http:HttpClient) { }
  getDesignation():Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>("api link") // here the get is an generic
  }

}
