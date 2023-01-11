import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {

  /**
   * The template of the Form saved in localStorage
   */
  formTemplate = Array();

  /**
   * Variable to control if a sudden error appears
   */
  error = false;

  results!: FormArray;

  average = 0;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formTemplate = this.getTemplateFromLocalStorage();
    if (this.formTemplate.length < 1) {
      this.error = true;
    }
    this.initResultsForm();
    this.getAverage();
  }

  /**
   * Gets the template from the localStorage and returns it as a FormArray
   * @returns The array of the template got from localStorage or a sample template array
   */
  getTemplateFromLocalStorage(): Array<any> {
    const stringTemplate = localStorage.getItem('formTemplate');
    if (stringTemplate) {
      const template = JSON.parse(stringTemplate) as Array<any>;
      template.forEach(element => {
        element.valorations.sort((a: { puntuation: number; }, b: { puntuation: number; }) => a.puntuation - b.puntuation);
      });
      return template;
    } else {
      const testTemplate = this.fb.array([
        this.fb.group({
          label: ['Criteri1'],
          valorations: this.fb.array([
            this.fb.group({
              label: ['Valoracio1'],
              puntuation: [1],
            }),
            this.fb.group({
              label: ['Valoracio2'],
              puntuation: [2],
            }),
            this.fb.group({
              label: ['Valoracio3'],
              puntuation: [3],
            }),
          ])
        }),
        this.fb.group({
          label: ['Criteri2'],
          valorations: this.fb.array([
            this.fb.group({
              label: ['Valoracio1'],
              puntuation: [1],
            }),
            this.fb.group({
              label: ['Valoracio2'],
              puntuation: [2],
            }),
            this.fb.group({
              label: ['Valoracio2'],
              puntuation: [5],
            }),
          ])
        })
      ]);
      return testTemplate.value;
    }
  }

  initResultsForm(): void {
    this.results = this.fb.array([], [
      Validators.required,
    ]);
    this.formTemplate.forEach(element => {
      this.results.push(this.fb.group({
        criteria: [element.label],
        selected: [[], [
          Validators.required
        ]]
      }));
    });
    this.getResultsFromLocalStorage();

    this.results.valueChanges.subscribe(changes => {
      this.saveResults();
    });
  }

  getResultsFromLocalStorage(): void {
    const oldResultsString = localStorage.getItem('results');
    let oldResults = Array<any>();
    if (oldResultsString) {
      oldResults = JSON.parse(oldResultsString);
    }
    Object.values(this.results.controls).forEach(element => {
      const name = element.get('criteria');
      console.log(name);
      const i = oldResults.findIndex(x => x.criteria === name);
      if (i !== -1) {
        const criteria = element as FormGroup;
        criteria.controls.selected = oldResults[i] as FormControl;
      }
    });
  }

  saveResults(): void {
    console.log(this.results);
    const stringJSON = JSON.stringify(this.results.value);
    localStorage.setItem('results', stringJSON);
    this.getAverage();
  }

  getAverage(): void {
    const numCriteria = this.results.length;
    let sum = 0;
    this.results.value.forEach((x: { selected: number; }) => {
      sum += x.selected;
    });
    this.average = sum / numCriteria;
  }
}
