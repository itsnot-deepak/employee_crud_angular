import { HttpClient } from '@angular/common/http';
import { Component,inject,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponseModel, Irole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment.development';

@Component({ // this is a component decorator for the class RolesComponent 
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule,CommonModule], // to do the two way binding we need to import FormsModule then do the two way binding
  templateUrl: './roles.component.html', // html connection 
  styleUrl: './roles.component.css' // css connection 
})


export class RolesComponent implements OnInit {

//constructor(private http: HttpClient){
      // this is called dependencies injection to use the http cilent we need to make an instance of it to use it 
      // this was the old way and below u have the new way of doing it 
//}
  http=inject(HttpClient);
  roleList :Irole[]=[ // actually we should write =res.data to get the data from the api but the api is not working , see inside the GetRoles function 
                      // that is the genral method 
    
  ];

  ngOnInit(): void { // this is activated whenever the page is loaded  , this is an life cycle even and would only work like that if i implement the OnInit
    this.getAllRoles()
  }


  getAllRoles() {
    this.http.get<Irole[]>(environment.API_URL+"roles").subscribe(
        (res) => {
            this.roleList = res;},
        (error) => {
            console.error("API Error:", error);
        }
    );
}
























// this is the normal way of doing the api call but we have done it in that way since i have an server on the system 
// and the json response is an array here and not the whole api respones model 

// ngOnInit(): void { // this is activated whenever the page is loaded  , this is an life cycle even and would only work like that if i implement the OnInit
//   //this.getAllRoles()
// }


// getAllRoles(){ // this is making the api call
//   this.http.get<APIResponseModel>("https://freeapi.miniprojectideas.com/api/EmployeeApp/GetAllRoles").subscribe((res:APIResponseModel)=>{
//        this.roleList=res.data;
//    })
// }











  // firtname: string="Shrey Jha ";
  // angularVersion="Hello";
  // version: number=19;
  // isActive: boolean=false;
  // currentDate: Date=new Date();
  // inputType:string="checkbox";
  // selectedValue:string=" ";

  // showWelcomeAlert (){
  //   alert("welcome to the angular 18")

  // }
  // showMessage(message:string){ // this is creating an function that requires an string input
  //   alert(message)

  // }
}
