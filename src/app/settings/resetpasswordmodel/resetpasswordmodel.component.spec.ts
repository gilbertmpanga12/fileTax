import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetpasswordmodelComponent } from './resetpasswordmodel.component';

describe('ResetpasswordmodelComponent', () => {
  let component: ResetpasswordmodelComponent;
  let fixture: ComponentFixture<ResetpasswordmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetpasswordmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetpasswordmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
