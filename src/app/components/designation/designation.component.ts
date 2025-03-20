import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { inject } from '@angular/core';
import { APIResponseModel, Idesignation } from '../../model/interface/role';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit{
  isloader:boolean=true; // isloader will only work properly when the api is working  , in my case it is not working so i have set it as false
  designationList: Idesignation[]=  // i am having to do this because my api doesn't work :(
     [ {
        "designationId": 26,
        "designation": "Associate Developer"
      },
      {
        "designationId": 28,
        "designation": "Director"
      },
      {
        "designationId": 29,
        "designation": "Manager"
      },
      {
        "designationId": 30,
        "designation": "Janitor"
      },
      {
        "designationId": 32,
        "designation": " Senior Developer"
      }
    ]
  
  masterService=inject(MasterService); // integrating the master service  this is an instance of the service 

  ngOnInit(): void {
     this.masterService.getDesignation().subscribe((res:APIResponseModel)=>{
       this.designationList=res.data;
       this.isloader=false;
     },error=>{
       alert("api doesn't work ")
     })
  }

}
