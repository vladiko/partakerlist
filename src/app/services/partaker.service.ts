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
    this.partakers.push(partaker);
  }

  removePartaker(partaker: Partaker) {
    _.remove(this.partakers, partaker);
  }
}
