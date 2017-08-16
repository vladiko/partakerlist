import { Component } from '@angular/core';
import { Partaker } from './models/partaker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Добро пожаловать на встречу выпускников!!!';
  placeMsg = 'Встреча состоится 9 сентября в 19:00 в кафе Жаксын';
  partakers = [new Partaker('Vova', 'Kogan'), new Partaker('Tania', 'Borisova')];
}
