import { AbstractControl, FormArray, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export function puntuationUnique(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: Array<any> = control.value;
    if (value) {
      const noDupes = new Array<number>();
      value.forEach(element => {
        if (element.puntuation && !(element.puntuation in noDupes)) {
          noDupes.push(element.puntuation);
        }
      });
      if (value.length === noDupes.length) {
        return null;
      }  else {
        return { valid: false };
      }
    } else {
      return { valid: false };
    }
  };
}
