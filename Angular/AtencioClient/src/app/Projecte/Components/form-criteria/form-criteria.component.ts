import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { puntuationUnique } from './Validator/Validator';

@Component({
  selector: 'app-form-criteria',
  templateUrl: './form-criteria.component.html',
  styleUrls: ['./form-criteria.component.scss']
})
export class FormCriteriaComponent implements OnInit {
  valorationsOptions = {
    label: new FormControl('', Validators.required),
    puntuation: new FormControl('', {
      validators: [
        Validators.required,
        Validators.max(10),
        Validators.min(0),
        // puntuationUnique()
      ]
    })
  };

  criteriaTemplate = {
    label: ['', [
      Validators.required
    ]],
    valorations: this.fb.array([this.fb.group(this.valorationsOptions)], [
      Validators.required,
      Validators.minLength(2)
    ])
  };

  mainForm: FormArray = this.fb.array([this.fb.group(this.criteriaTemplate)]);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    const templateString = localStorage.getItem('formTemplate');
    if (templateString) {
      const testForm = JSON.parse(templateString);
      if (testForm.controls.length > 0) {
        this.mainForm = testForm;
      }
    }
  }

  addCriteria(): void {
    this.mainForm.push(this.fb.group(this.criteriaTemplate));
    console.log(this.mainForm.controls);
  }

  addValoration(criteriaIndex: number): void {
    const control = this.getValorationsFromCriteria(criteriaIndex) as FormArray;
    control.push(this.fb.group(this.valorationsOptions));
    console.log(control);
  }

  removeCriteria(criteriaIndex: number): void {
    this.mainForm.removeAt(criteriaIndex);
    console.log(this.mainForm.controls);
  }

  removeValoration(criteriaIndex: number, valorationIndex: number): void {
    const control = this.getValorationsFromCriteria(criteriaIndex) as FormArray;
    control.removeAt(valorationIndex);
    console.log(control);
  }

  getCriteriaLabel(criteriaIndex: number): any {
    const control = this.mainForm.at(criteriaIndex).get('label');
    return control;
  }

  getValorationsLabel(criteriaIndex: number, valorationIndex: number): any {
    return this.getValoration(criteriaIndex, valorationIndex).get('label');
  }

  getValorationsPuntuation(criteriaIndex: number, valorationIndex: number): any {
    return this.getValoration(criteriaIndex, valorationIndex).get('puntuation');
  }

  getCriteriaForm(criteriaIndex: number): any {
    const control = this.mainForm.controls[criteriaIndex];
    return control;
  }

  getValorationsFromCriteria(criteriaIndex: number): any {
    const control = this.mainForm.at(criteriaIndex).get('valorations') as FormArray;
    return control;
  }

  getValoration(criteriaIndex: number, valorationIndex: number): any {
    const control = this.getValorationsFromCriteria(criteriaIndex).controls[valorationIndex];
    return control;
  }

  register(): void {
    localStorage.setItem('formTemplate', JSON.stringify(this.mainForm));
    console.log(this.mainForm.value);
  }
}
