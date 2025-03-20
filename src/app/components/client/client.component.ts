import { Component } from '@angular/core';
import { Client } from '../../model/class/client';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
  clientObject:Client=new Client(); // this is the instance of the class , this is why class is used instead of the interface 
  clientList:Client[]=[];


}
