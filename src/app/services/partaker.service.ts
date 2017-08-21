import { Injectable } from '@angular/core';
import { Partaker } from '../models/partaker';
import * as _ from 'lodash';
import { CommunicationService } from './communication.service';

@Injectable()
export class PartakerService {
  public partakers: Partaker[] = [];

  constructor(private communicationService: CommunicationService) {
    this.communicationService.getPartakerList().then((s) => {
      this.fillArray(this.partakers, s);
    });
  }

  addPartaker(partaker: Partaker) {
    this.communicationService.addNewPartaker(partaker).then(() => {
      this.communicationService.getPartakerList().then((s) => {
        this.fillArray(this.partakers, s);
      });
    });
  }

  removePartaker(partaker: Partaker) {
    this.communicationService.removePartaker(partaker).then(() => {
      this.communicationService.getPartakerList().then((s) => {
        this.fillArray(this.partakers, s);
      });
    });
  }

  private fillArray(a1: Partaker[], a2: Partaker[]) {
    this.partakers.length = 0;
    if (a2) {
      a2.forEach((p) => {
        a1.push(p);
      });
    }
  }
}
