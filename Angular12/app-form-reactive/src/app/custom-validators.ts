import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";
import { delay } from 'rxjs/operators'

export function emailValidator(control: AbstractControl): {[key: string]: any} | null {
  const emailRegEx = /^([a-zA-Z0-9 \.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})$/
  const value = control.value
  const result = emailRegEx.test(value)

  if (!result) return {emailValidator: {value}}

  return null
}

export function rangeValidator(minValue: number, maxValue: number): any {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const value = +control.value

    if (isNaN(value)) return {rangeValidator: {value}}
    else if (value < minValue || value > maxValue) return {rangeValidator: {value}}
    return null
  }
}

export function asyncUrlValidator(control: AbstractControl): Promise<ValidationErrors | null> {
  const urlRegEx = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
  const value = control.value
  const result = urlRegEx.test(value)

  return new Promise((resolve) => {
    setTimeout(() => {
      if (result) {
        resolve(null)
      } else {
        resolve({urlNotAllowed: {value}})
      }
    }, 5000)
  })
} 

export function observableUrlValidator(control: AbstractControl): Observable<ValidationErrors | null> {
  const urlRegEx = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
  const value = control.value
  const result = urlRegEx.test(value)

  return new Observable<ValidationErrors | null>((observer) => {
    if (result) {
      observer.next(null)
    } else {
      observer.next({urlNotAllowed: {value}})
    }
    observer.complete()
  }).pipe(delay(5000))
} 
