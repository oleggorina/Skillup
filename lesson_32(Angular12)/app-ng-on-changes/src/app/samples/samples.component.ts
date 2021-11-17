import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.scss']
})
export class SamplesComponent implements OnInit {
  
  nameValue = 'empty'
  counter = 0
  
  constructor() { }

  ngOnInit(): void {
  }

  private getTimeString = (): string => {
    const d = new Date()
    return `name-${d.getMinutes()}-${d.getSeconds()}-${d.getMilliseconds()}`
  }

  changeName(): void {
    this.nameValue = this.getTimeString()
  }

  changeValue() {
    this.counter ++
  }

  changeBoth() {
    this.changeName()
    this.changeValue()
  }

}
