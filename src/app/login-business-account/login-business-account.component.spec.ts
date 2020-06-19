import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBusinessAccountComponent } from './login-business-account.component';

describe('LoginBusinessAccountComponent', () => {
  let component: LoginBusinessAccountComponent;
  let fixture: ComponentFixture<LoginBusinessAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginBusinessAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBusinessAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
