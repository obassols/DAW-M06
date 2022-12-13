import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function codiValid(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value;
    if (value) {
      return value.endsWith('x') ? null : {valid: false};
    } else {
      return {valid: false};
    }
  };
}
