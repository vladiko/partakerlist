import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Partaker } from '../models/partaker';

@Injectable()
export class CommunicationService {
  private readonly baseUrl = `http://partakersserver.azurewebsites.net/`;
  // private readonly baseUrl = `http://localhost:1337/`;
  getPartakerList(): Promise<Partaker[]> {
    return this.http.get(this.baseUrl)
      .toPromise()
      .then(response =>
        response.json() as Partaker[]
      )
      .catch(err => { console.log(err); });
  }

  addNewPartaker(partaker: Partaker): Promise<void> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.baseUrl, partaker, options).toPromise().then(responce => {
    })
      .catch(err => { console.log(err); });
  }

  removePartaker(partaker: Partaker) {
    return this.http.delete(this.baseUrl, { body: partaker }).toPromise().then(responce => {
    })
      .catch(err => { console.log(err); });
  }


  constructor(private http: Http) {

  }
}
