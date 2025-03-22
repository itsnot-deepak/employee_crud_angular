import { Routes } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ClientComponent } from './components/client/client.component';
import { ClientProjectComponent } from './components/client-project/client-project.component';

export const routes: Routes = [
    {
        path:'', // this is the path that it matches to, when there would be no route redirect to master 
        redirectTo:'master', // this can even redirect to the functions too , this is used to redirect when we arrive at that route 
        pathMatch:'full' // this matches only if the path matches completley 
    },
    {
        path:'master',
        component:MasterComponent // this says load this component 
    },
    {
        path:'employee',
        component:EmployeeComponent // this says load this component 
    },
    {
        path:'client',
        component:ClientComponent // this says load this component 
    },
    {
        path:'client-project',
        component:ClientProjectComponent // this says load this component 
    }

];
