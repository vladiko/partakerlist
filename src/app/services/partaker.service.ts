import { Injectable } from '@angular/core';
import { Partaker } from '../models/partaker';
import * as _ from 'lodash';
import { CommunicationService } from './communication.service';

@Injectable()
export class PartakerService {
  public partakers: Partaker[] = [];
  public loadingPartakers = false;

  constructor(private communicationService: CommunicationService) {
    this.getPartakersFromServer();
  }

  addPartaker(partaker: Partaker) {
    this.communicationService.addNewPartaker(partaker).then(() => {
      this.getPartakersFromServer();
    });
  }

  removePartaker(partaker: Partaker) {
    this.communicationService.removePartaker(partaker).then(() => {
      this.getPartakersFromServer();
    });
  }

  private getPartakersFromServer() {
    this.loadingPartakers = true;
    this.communicationService.getPartakerList().then((s) => {
      this.fillArray(this.partakers, s);
      this.loadingPartakers = false;
    }, () => {
      this.loadingPartakers = false;
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
