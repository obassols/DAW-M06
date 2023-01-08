import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {

  formTemplate!: FormArray;

  constructor() { }

  ngOnInit(): void {
    const stringTemplate = localStorage.getItem('formTemplate');
    console.log(stringTemplate);
    if (stringTemplate) {
      this.formTemplate = JSON.parse(stringTemplate);
    }
  }

}
