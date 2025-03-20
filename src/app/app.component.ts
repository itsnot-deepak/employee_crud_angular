import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RolesComponent } from './components/roles/roles.component';
import { MasterComponent } from './components/master/master.component';
// this is your main componenet where u need to connect other components
@Component({ // this is an decorator for the class below this , this just adds the meta data letting the compiler know what this class is going to do 
  selector: 'app-root', // this is the selector this represents how this will be called/ used in the html documents 
  standalone: true,
  imports: [RouterOutlet,RolesComponent,MasterComponent,RouterLink,RouterLinkActive], // u add all the other components in this which u need to use 
  templateUrl: './app.component.html', // this mentions which html this component relates to 
  styleUrl: './app.component.css'// this represent css that this component relates to
})
export class AppComponent { // this is the class and the word export means that this can be imported into any other component 
  // it is not recommended to make an instance of an class in the component directly but this can be done in some ways like creating an service 
  // or using the parent and child classes we can do that 
  title = 'angular_18_tut';
}
