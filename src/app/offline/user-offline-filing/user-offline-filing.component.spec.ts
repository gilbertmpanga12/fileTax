import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOfflineFilingComponent } from './user-offline-filing.component';

describe('UserOfflineFilingComponent', () => {
  let component: UserOfflineFilingComponent;
  let fixture: ComponentFixture<UserOfflineFilingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOfflineFilingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOfflineFilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
