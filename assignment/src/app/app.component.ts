import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter=0;
  odd: number [] = [];
  even: number [] = [];
  counterStarted($event) {
    this.counter = $event.count;
    if (this.counter % 2 === 0) {
      this.even.push(this.counter);
    } else {
      this.odd.push(this.counter);
    }
  }


}
