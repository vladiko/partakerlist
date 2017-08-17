import { Component } from '@angular/core';
import { Partaker } from './models/partaker';
import { PartakerService } from './services/partaker.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Добро пожаловать на встречу выпускников!!!';
  placeMsg = 'Встреча состоится 9 сентября в 19:00 в кафе Жаркын';

  public regName: string;
  public regLastName: string;
  public get isAddButonEnabled() {
    return this.regName &&
      this.regLastName &&
      this.regLastName.trim() &&
      this.regName.trim() &&
      !this.isPartakerExist(this.regName.trim(), this.regLastName.trim());
  }

  constructor(public partakerService: PartakerService) {
  }
  get partakers() {
    return this.partakerService.partakers;
  }

  public isPartakerExist(firstname: string, lastname: string): boolean {
    const a = _.find(this.partakerService.partakers, (p) => p.firstName === this.regName && p.lastName === this.regLastName);
    return !!a;
  }

  public registrate() {
    const p = new Partaker(this.regName, this.regLastName);
    this.partakerService.addPartaker(p);
  }
}
