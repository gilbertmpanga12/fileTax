import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyBasicInfoComponent } from './company-basic-info.component';

describe('CompanyBasicInfoComponent', () => {
  let component: CompanyBasicInfoComponent;
  let fixture: ComponentFixture<CompanyBasicInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyBasicInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
