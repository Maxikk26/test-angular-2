import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TableComponent } from './components/table/table.component';


const APP_ROUTES: Routes = [  
    {path: 'table', component: TableComponent}, 
    {path: '**', pathMatch: 'full', redirectTo: 'table'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);