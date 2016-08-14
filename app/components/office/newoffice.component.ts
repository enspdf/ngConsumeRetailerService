import { Component, OnInit } from '@angular/core';
import { OfficeService } from '../../services/office.service';
import { ActivatedRoute } from '@angular/router';
import { Office } from '../../Models/Office';

@Component({
  moduleId: module.id,
  selector: 'office',
  templateUrl: 'newoffice.component.html',
  providers: [OfficeService]
})
export class NewOfficeComponent {
  countryStr : string;
  phoneStr : string;
  cityStr :  string;
  stateStr : string;

  onSubmit() {
    console.log("form submitted");
  }

}
