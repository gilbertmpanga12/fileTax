import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyOfflineFilingComponent } from './company-offline-filing.component';

describe('CompanyOfflineFilingComponent', () => {
  let component: CompanyOfflineFilingComponent;
  let fixture: ComponentFixture<CompanyOfflineFilingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyOfflineFilingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyOfflineFilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
