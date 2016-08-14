import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { OfficeService } from './services/office.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    providers: [HTTP_PROVIDERS, OfficeService]
})
export class AppComponent { }
