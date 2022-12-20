import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCriteriaComponent } from './form-criteria.component';

describe('FormCriteriaComponent', () => {
  let component: FormCriteriaComponent;
  let fixture: ComponentFixture<FormCriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCriteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
