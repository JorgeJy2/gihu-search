import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGithubComponent } from './search-github.component';

describe('SearchGithubComponent', () => {
  let component: SearchGithubComponent;
  let fixture: ComponentFixture<SearchGithubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchGithubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
