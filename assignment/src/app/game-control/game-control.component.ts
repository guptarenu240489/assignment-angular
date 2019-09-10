import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() startCounter =  new EventEmitter<{}>();
  @Output() stopCounter = new EventEmitter();
  count=0;
  ref;
  constructor() {
  }

  ngOnInit() {
  }

  startTimer = () => {
    this.ref = setInterval(() => {
      this.count++;
      this.startCounter.emit({count: this.count});
    }, 1000);
  }

  stopTimer = () => {
    clearTimeout(this.ref);
    this.stopCounter.emit();
  }

}
