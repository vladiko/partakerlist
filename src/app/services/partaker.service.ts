import { Injectable } from '@angular/core';
import { Partaker } from '../models/partaker';
import * as _ from 'lodash';

@Injectable()
export class PartakerService {
  public partakers: Partaker[];

  constructor() {
    this.partakers = [new Partaker('Vova', 'Kogan'), new Partaker('Tania', 'Borisova')];
  }

  addPartaker(partaker: Partaker) {
    this.partakers.push(partaker);
  }

  removePartaker(partaker: Partaker) {
    _.remove(this.partakers, partaker);
  }
}
