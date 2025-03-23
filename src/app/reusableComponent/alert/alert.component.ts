import { Component ,Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {

  @Input() Alert:string="" // this is basically creating an input varibale that can be provided by the parent component 
  @Input() message:string=""


}
