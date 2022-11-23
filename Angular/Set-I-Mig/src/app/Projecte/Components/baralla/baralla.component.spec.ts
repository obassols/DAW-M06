import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarallaComponent } from './baralla.component';

describe('BarallaComponent', () => {
  let component: BarallaComponent;
  let fixture: ComponentFixture<BarallaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarallaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
