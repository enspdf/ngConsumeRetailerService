import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
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

  saveOffice(country : string, phone : string, city : string, state : string) {
    this.officeUrl = 'http://localhost:8181/RetailerRestService/api/offices';
    let body = new URLSearchParams();
    body.set('city', city);
    body.set('phone', phone);
    body.set('state', state);
    body.set('country', country);
    let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers : headers, method : "post" });
    return this._http.post(this.officeUrl, body, options);
  }

}
