import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { codiValid } from './Validator/Validator';

@Component({
  selector: 'app-incidencia',
  templateUrl: './incidencia.component.html',
  styleUrls: ['./incidencia.component.scss']
})
export class IncidenciaComponent implements OnInit {
  incidenciaForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.incidenciaForm = this.fb.group({
      codi: ['2022-',
      {
        validators: [
          Validators.required,
          Validators.minLength(7),
          // Validators.maxLength(8),
          codiValid()
        ]
      }],
      // titol: new FormControl('')
      titol: ['', [
        Validators.required,
        Validators.maxLength(100)
      ]],
      responsable: this.fb.group({
        rol: [''],
        nom: ['']
      })
    });
  }

  onSubmit(): void {
    console.log(this.incidenciaForm.get('codi')?.value);
    console.log(this.incidenciaForm.get('titol')?.value);
  }

  getControlResponsableRol(): any {
    return this.incidenciaForm.get('responsable.rol');
  }
}
