import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { OfficeComponent } from '../app/components/office/office.component';
import { NewOfficeComponent } from '../app/components/office/newoffice.component';
import { routing, appRouterProviders } from './app.routes';

@NgModule({
  imports: [ BrowserModule, routing, FormsModule ],
  declarations: [ AppComponent, OfficeComponent, NewOfficeComponent ],
  providers: [appRouterProviders],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
