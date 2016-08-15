import { Component } from '@angular/core';
import { OfficeService } from '../../services/office.service';

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
  result : string;

  constructor(private _officeService : OfficeService) {

  }

  onSubmit() {
    this._officeService.saveOffice(this.countryStr, this.phoneStr, this.cityStr, this.stateStr)
      .subscribe(result => {
        this.result = result;
      })
  }

}
