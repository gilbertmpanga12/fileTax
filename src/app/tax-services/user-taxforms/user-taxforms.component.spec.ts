import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTaxformsComponent } from './user-taxforms.component';

describe('UserTaxformsComponent', () => {
  let component: UserTaxformsComponent;
  let fixture: ComponentFixture<UserTaxformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTaxformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTaxformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
