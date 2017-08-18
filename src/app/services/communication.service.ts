import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Partaker } from '../models/partaker';

@Injectable()
export class CommunicationService {
  private readonly baseUrl = `http://partakersserver.azurewebsites.net/`;

  getPartakerList(): Promise<Partaker[]> {
    return this.http.get(this.baseUrl)
      .toPromise()
      .then(response =>
        response.json() as Partaker[]
      )
      .catch(err => { console.log(err); });
  }


  constructor(private http: Http) {

  }
}
