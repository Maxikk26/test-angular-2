import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { TableComponent } from './components/table/table.component';
import { PrintComponent } from './components/print/print.component';


const APP_ROUTES: Routes = [  
    {path: 'table', component: TableComponent}, 
    {path: 'login', component: LoginComponent}, 
    {path: 'print', component: PrintComponent}, 
    {path: '**', pathMatch: 'full', redirectTo: 'login'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);