import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEmpyComponent } from './card-empy.component';

describe('CardEmpyComponent', () => {
  let component: CardEmpyComponent;
  let fixture: ComponentFixture<CardEmpyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardEmpyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEmpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
