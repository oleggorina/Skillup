import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {

  @Input('name') personName: string = 'Гость'
  @Input('age') personAgeValue: number | string = 25
  @Input('step') personAgeStep: number | string = 1
  
  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.personAgeValue = +this.personAgeValue + +this.personAgeStep
  }

  decrement() {
    this.personAgeValue = +this.personAgeValue - +this.personAgeStep

  }

}
