import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-item',
  templateUrl: './sample-item.component.html',
  styleUrls: ['./sample-item.component.scss']
})
export class SampleItemComponent implements OnInit {

  @Input() name: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
