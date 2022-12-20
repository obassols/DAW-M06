import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-criteria',
  templateUrl: './form-criteria.component.html',
  styleUrls: ['./form-criteria.component.scss']
})
export class FormCriteriaComponent implements OnInit {
  criteriaForm!: FormGroup;

  valorations: FormArray = this.fb.array([], [
    Validators.minLength(2),
  ]);

  valorationsConfig = {
    label: ['', [
      Validators.required
    ]],
    puntuation: ['', [
      Validators.required,
      Validators.pattern('^[0-9]$')
    ]]
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addValoration();
    this.addValoration();

    this.criteriaForm = this.fb.group({
      label: ['', [
        Validators.required
      ]],
      valorations: this.valorations
    });
  }

  addValoration(): void {
    this.valorations.push(this.fb.group(this.valorationsConfig));
    console.log(this.valorations);
  }

  removeValoration(): void {
    this.valorations.removeAt(this.valorations.length - 1);
    console.log(this.valorations);
  }

  onSubmit(): void {
    console.log(this.criteriaForm.value);
  }

  /* getControlValorationsLabel(): any {
    return this.criteriaForm.get('valorations.label');
  }

  getControlValorationsPuntuation(): any {
    return this.criteriaForm.get('valorations.puntuation');
  } */

}
