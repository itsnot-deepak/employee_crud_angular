import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/client';
import { APIResponseModel, employee, Project } from '../model/interface/role';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})

// so we can create this service for the api call in the master itself but we created another file just to show how to do 
export class ClientService {

  constructor(private http:HttpClient) { } // initialization of the http client is important for the class to run api 

  getAllClient():Observable<Client[]>{
    return this.http.get<Client[]>(environment.API_URL+"clients")
  }
  add(obj:Client):Observable<Client[]>{
    return this.http.post<Client[]>(environment.API_URL+"clients",obj) // this is post request , the api is same as for get , but here in the method we expect an
  }                                                                   // client objct and , post requires the url and the value to be posted as arguments 
  deleteClientByID(id:string):Observable<Client[]>{
    return this.http.delete<Client[]>(environment.API_URL+"clients/"+id)
  }
  update(obj:Client):Observable<Client[]>{
    return this.http.put<Client[]>(environment.API_URL+"clients/"+obj.id,obj) // this is put/edit request so therefore we need to give the proper url and then also give the obj we are upating
  } 
  getAllEmployee():Observable<employee[]>{
    return this.http.get<employee[]>(environment.API_URL+"employees")
  }

  addClientProject(obj:Project):Observable<Project[]>{
    return this.http.post<Project[]>(environment.API_URL+"projects",obj)
  }   
}
