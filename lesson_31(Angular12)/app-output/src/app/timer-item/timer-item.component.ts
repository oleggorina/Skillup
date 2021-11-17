import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer-item',
  templateUrl: './timer-item.component.html',
  styleUrls: ['./timer-item.component.scss']
})
export class TimerItemComponent implements OnInit {

  @Input() timerInterval: number = 1000
  currentTimerValue: number = 0
  private timerID: any = null
  @Output() tick = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  timerStart() {
    if (this.timerID !== null) return
    this.timerID = setInterval(() => {
      this.timerIncrement()
    }, this.timerInterval)
  }

  timerStop() {
    if(this.timerID === null) return
    clearInterval(this.timerID)
  }

  private timerIncrement() {
    this.tick.emit(++this.currentTimerValue)
    
  }

}
