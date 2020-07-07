import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsubscriptionComponent } from './accountsubscription.component';

describe('AccountsubscriptionComponent', () => {
  let component: AccountsubscriptionComponent;
  let fixture: ComponentFixture<AccountsubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
