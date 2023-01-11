import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-criteria',
  templateUrl: './form-criteria.component.html',
  styleUrls: ['./form-criteria.component.scss']
})
export class FormCriteriaComponent implements OnInit {
  valorationsOptions = {
    label: ['', Validators.required],
    puntuation: ['', [
        Validators.required,
        Validators.min(0),
      ]
    ]
  };

  criteriaTemplate = {
    label: ['', Validators.required],
    valorations: this.fb.array([], [
      Validators.required,
      Validators.minLength(2)
    ])
  };

  mainForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.mainForm = this.fb.group(this.criteriaTemplate);
  }

  addValoration(): void {
    const control = this.getValorations() as FormArray;
    control.push(this.fb.group(this.valorationsOptions));
  }

  removeValoration(valorationIndex: number): void {
    const valorations = this.getValorations();
    valorations.removeAt(valorationIndex);
  }

  getValorations(): FormArray {
    const control = this.mainForm.controls.valorations as FormArray;
    return control;
  }

  register(): void {
    const controlsString = localStorage.getItem('formTemplate');
    let controls = [];
    if (controlsString) {
      controls = JSON.parse(controlsString);
    }
    controls.push(this.mainForm.value);
    localStorage.setItem('formTemplate', JSON.stringify(controls));
    this.mainForm.reset();
  }

  clearTemplate(): void {
    localStorage.setItem('formTemplate', '');
    this.mainForm.reset();
  }
}
