import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBusinessAccountComponent } from './create-business-account.component';

describe('CreateBusinessAccountComponent', () => {
  let component: CreateBusinessAccountComponent;
  let fixture: ComponentFixture<CreateBusinessAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBusinessAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBusinessAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
