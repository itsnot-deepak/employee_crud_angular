import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/client';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{
  clientObject:Client=new Client(); // this is the instance of the class , this is why class is used instead of the interface
  clientObject2:Client=new Client(); 
  clientList:Client[]=[]; // this will get the data that is returned from the api 
  clientService=inject(ClientService)
  editMode:boolean=false;
  ngOnInit(): void {
    this.loadClient();
    
  }
  loadClient(){
    this.clientService.getAllClient().subscribe((res)=>{
      this.clientList=res;
    })
  }
  Rest(){
    this.clientObject=this.clientObject2;
  }
  onEdit(item:Client){
    this.clientObject=item;
    this.editMode=true    
  }
  AddClient(){
    debugger
    if(!this.editMode){
      debugger
      this.clientService.add(this.clientObject).subscribe((res)=>
      {
        if(res){
          alert("client added")
          this.loadClient();
        }
        else{
          alert("error")
        }
      })
  }
  else{
    debugger;
    this.clientService.update(this.clientObject).subscribe((res)=>{
      debugger
      console.log(res);
      if(res){
        alert("updated the record")
        this.loadClient()
        debugger;
      }
      else{
        alert("error")
      }
    })
  }
}
  onDelete(id:string){
    const isdel=confirm("Are you sure u want to delete")
    if(isdel){
    this.clientService.deleteClientByID(id).subscribe((res)=>{
        if(res){
          alert("Account deleted")
          this.loadClient();
        }
        else{
          alert("error")
        }
    })
  }
  }
}
