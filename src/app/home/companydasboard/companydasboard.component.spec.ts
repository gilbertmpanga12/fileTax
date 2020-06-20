import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanydasboardComponent } from './companydasboard.component';

describe('CompanydasboardComponent', () => {
  let component: CompanydasboardComponent;
  let fixture: ComponentFixture<CompanydasboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanydasboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanydasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
