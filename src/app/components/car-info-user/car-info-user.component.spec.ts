import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarInfoUserComponent } from './car-info-user.component';

describe('CarInfoUserComponent', () => {
  let component: CarInfoUserComponent;
  let fixture: ComponentFixture<CarInfoUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarInfoUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarInfoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
