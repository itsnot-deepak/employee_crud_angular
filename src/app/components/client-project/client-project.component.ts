import { CommonModule} from '@angular/common';
import { Component, inject, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { employee } from '../../model/interface/role';
import { Client } from '../../model/class/client';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {

  clientSrv= inject(ClientService) // if u get the error on this then import the inject from angular core 
  ngOnInit(): void {
    this.getAllEmployee();
    this.getAllclient();
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
}
