import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardrowComponent } from './cardrow.component';

describe('CardrowComponent', () => {
  let component: CardrowComponent;
  let fixture: ComponentFixture<CardrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
