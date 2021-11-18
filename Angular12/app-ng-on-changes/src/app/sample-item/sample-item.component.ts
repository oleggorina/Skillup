import { Component, Input, OnInit, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-sample-item',
  templateUrl: './sample-item.component.html',
  styleUrls: ['./sample-item.component.scss']
})
export class SampleItemComponent implements OnInit {

  @Input() name: string = ''
  @Input() value: number = 0
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }): void {
    const msgArray: string[] = []

    for (const propName in changes) {
      msgArray.push(`Свойство "${propName}", \n\tтекущее значение = ${changes[propName].currentValue}, \n\tпредыдущее значение = ${changes[propName].previousValue}`)
    }

    console.log('changes: ', changes)
    console.log(msgArray.join('\n'))
  }

}
