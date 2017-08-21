import { Injectable } from '@angular/core';
import { Partaker } from '../models/partaker';
import * as _ from 'lodash';
import { CommunicationService } from './communication.service';

@Injectable()
export class PartakerService {
  public partakers: Partaker[];

  constructor(private communicationService: CommunicationService) {
    this.communicationService.getPartakerList().then((s) => {
      this.partakers = s;
    });
    // this.partakers = [
    //   new Partaker('Vova', 'Kogan'),
    //   new Partaker('Erden', 'Magzumov'),
    //   new Partaker('Tania', 'Borisova')
    // ];
  }

  addPartaker(partaker: Partaker) {
    this.communicationService.addNewPartaker(partaker).then(() => {
      this.communicationService.getPartakerList().then((s) => {
        this.partakers = s;
      });
    });
  }

  removePartaker(partaker: Partaker) {
    this.communicationService.removePartaker(partaker).then(() => {
      this.communicationService.getPartakerList().then((s) => {
        this.partakers = s;
      });
    });
  }
}
