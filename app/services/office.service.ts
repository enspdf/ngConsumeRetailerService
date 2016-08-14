import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OfficeService {
  private officeUrl : string;

  constructor(private _http : Http) {

  }

  getOffices() {
    this.officeUrl = 'http://localhost:8181/RetailerRestService/api/offices';
    return this._http.get(this.officeUrl)
      .map(res => res.json());
  }
}
