import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user.class';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, AfterViewInit {

  roles: string[] = ['Гость', 'Модератор', 'Администратор']
  model: User = new User(1,'','', null)
  
  formErrors: any = {
    name: '',
    age: ''
  }

  validationMessages: any = {
    name: {
      required: 'Имя обязательно',
      minlength: 'Имя должно содержать минимум 4 символа'
    },
    age: {
      required: 'Возраст обязателен'
    }
  }

  @ViewChild('userForm') userForm: NgForm | null = null
  
  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.userForm?.valueChanges?.subscribe(() => this.onValueChanged())
  }

  onSubmit(): void {
    console.log('Form submitted')
  }

  private onValueChanged(): void {
    const form: any = this.userForm?.form
    for (const field in this.formErrors) {
      this.formErrors[field] = ''
      const control = form.get(field)
      if (control && control.dirty && control.invalid) {
        const message = this.validationMessages[field]

        for (const key in control.errors) {
          console.log(message[key])
          this.formErrors[field] += message[key] + ' '
        }
      } 
    }
  }

}
