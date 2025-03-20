import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/client';
import { APIResponseModel } from '../model/interface/role';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})

// so we can create this service for the api call in the master itself but we created another file just to show how to do 
export class ClientService {

  constructor(private http:HttpClient) { } // initialization of the http client is important for the class to run api 

  getAllClient():Observable<Client>{
    return this.http.get<Client>(environment.API_URL+"the other half of the api ")
  }
}
