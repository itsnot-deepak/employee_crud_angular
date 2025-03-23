import { CommonModule, DatePipe} from '@angular/common';
import { Component, inject, NgModule, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, NgForm, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { employee, Project } from '../../model/interface/role';
import { Client } from '../../model/class/client';
import { AlertComponent } from "../../reusableComponent/alert/alert.component";

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DatePipe, AlertComponent],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {

  clientSrv= inject(ClientService) // if u get the error on this then import the inject from angular core 
  ngOnInit(): void {
    this.getAllEmployee();
    this.getAllclient();
    this.getAllProject();
  }
  employeelist:employee[]=[];
  clientList:Client[]=[];
  getAllEmployee(){
    this.clientSrv.getAllEmployee().subscribe((res)=>{
      this.employeelist=res;
    })
  }
  getAllclient(){
    this.clientSrv.getAllClient().subscribe((res)=>{
      this.clientList=res;
    })
  }
  OnSaveProject(){
    const formValue=this.form.value;
    this.clientSrv.addClientProject(formValue).subscribe((res)=>{
      if(res){
        alert("project is saved")
      }else{
        alert("error")
      }
    })
  }
  


  form:FormGroup=new FormGroup({
    // inside this form we provide the controls 
    clientProjectId: new FormControl(0),
    projectName:new FormControl("",[Validators.required,Validators.minLength(4)]),
    startDate: new FormControl(""),
    expectedEndDate: new FormControl(""),
    leadByEmpId: new FormControl(""),
    completedDate: new FormControl(""),
    contactPerson: new FormControl(""),
    contactPersonContactNO: new FormControl(""),
    totalEmpWorking: new FormControl(""),
    projectCost: new FormControl(""),
    projectDetails: new FormControl(""),
    contactPersonEmailId: new FormControl(""),
    clientId: new FormControl("")
  })

  firstName=signal("Angular 18"); // declaring a signal and then intializing that with an value 
  projectList=signal<Project[]>([]); // this makes an signal of type project array and then it is initalized as an list 
  // we can strongly type this and have a strong type for the signal 

  changeName(){
    this.firstName.set("React js") // this can be used to change the signal value 
  }

  getAllProject(){
    this.clientSrv.getClientProject().subscribe((res)=>{
      this.projectList.set(res);
    })
  }
}
