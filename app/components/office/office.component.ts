import { Component, OnInit } from '@angular/core';
import { OfficeService } from '../../services/office.service';
import { Office } from '../../Models/Office';

@Component({
  moduleId: module.id,
  selector: 'office',
  templateUrl: 'office.component.html',
  providers: [OfficeService]
})
export class OfficeComponent implements OnInit{

  offices: Office[];

  constructor(private _officeService : OfficeService) {

  }

  ngOnInit() {
    this._officeService.getOffices()
      .subscribe(offices => {
        this.offices = offices;
      })
  }

}
