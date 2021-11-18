import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timers',
  templateUrl: './timers.component.html',
  styleUrls: ['./timers.component.scss']
})
export class TimersComponent implements OnInit {

  tickLog = [0, 0, 0]

  constructor() { }

  ngOnInit(): void {
  }

  log(e: number, pos: number) {
    this.tickLog[pos] = e
  }

}
