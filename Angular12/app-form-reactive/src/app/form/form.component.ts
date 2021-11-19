import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl('userName', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(7)])
  })
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: FormGroup): void {
    console.log(form.valid)
    console.log(form.value)
  }

}
