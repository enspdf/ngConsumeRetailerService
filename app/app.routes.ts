import { Routes, RouterModule } from '@angular/router';
import { OfficeComponent } from './components/office/office.component';
import { NewOfficeComponent } from './components/office/newoffice.component';

const routes : Routes = [
  {path:'', component: OfficeComponent},
  {path:'new', component: NewOfficeComponent}
];

export const appRouterProviders : any[] = [

];

export const routing = RouterModule.forRoot(routes);
