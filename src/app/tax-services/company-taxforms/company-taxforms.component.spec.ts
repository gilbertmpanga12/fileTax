import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyTaxformsComponent } from './company-taxforms.component';

describe('CompanyTaxformsComponent', () => {
  let component: CompanyTaxformsComponent;
  let fixture: ComponentFixture<CompanyTaxformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyTaxformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyTaxformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
