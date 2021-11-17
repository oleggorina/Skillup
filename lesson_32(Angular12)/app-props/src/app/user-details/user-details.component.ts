import { I18nPluralPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input() userFirstName: string = ''
  @Input() userLastName: string = ''

  private _userAge: number = 18

  constructor() { }

  ngOnInit(): void {
  }

  get userAge(): number | string {
    return this._userAge
  }

  @Input()
  set userAge(value: string | number) {
    this._userAge = +value
  }

  get userFullName(): string {
    return `${this.userFirstName} ${this.userLastName}`
  }

  @Input()
  set userFullName(value: string) {
    this.userFirstName = value.split(' ')[0]
    this.userLastName = value.split(' ')[1]
  }

}
