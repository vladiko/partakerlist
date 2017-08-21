import { Injectable } from '@angular/core';
import { Partaker } from '../models/partaker';
import * as _ from 'lodash';
import { CommunicationService } from './communication.service';

@Injectable()
export class PartakerService {
  public partakers: Partaker[] = [];

  constructor(private communicationService: CommunicationService) {
    this.communicationService.getPartakerList().then((s) => {
      this.partakers.length = 0;
      this.partakers.concat(s);
    });
  }

  addPartaker(partaker: Partaker) {
    this.communicationService.addNewPartaker(partaker).then(() => {
      this.communicationService.getPartakerList().then((s) => {
        this.partakers.length = 0;
        this.partakers.concat(s);
      });
    });
  }

  removePartaker(partaker: Partaker) {
    this.communicationService.removePartaker(partaker).then(() => {
      this.communicationService.getPartakerList().then((s) => {
        this.partakers.length = 0;
        this.partakers.concat(s);
      });
    });
  }
}
