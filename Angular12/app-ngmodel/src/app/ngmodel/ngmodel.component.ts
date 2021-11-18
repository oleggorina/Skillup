import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngmodel',
  templateUrl: './ngmodel.component.html',
  styleUrls: ['./ngmodel.component.scss']
})
export class NgmodelComponent implements OnInit {

  xValue = 0
  yValue = 0
  result!: number
  
  constructor() { }

  ngOnInit(): void {
  }

 calculate() {
   this.result = +this.xValue + +this.yValue
 }
 
  reset() {
    this.result = this.xValue = this.yValue = 0;
 } 

}
