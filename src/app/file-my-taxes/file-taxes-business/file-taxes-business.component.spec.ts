import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileTaxesBusinessComponent } from './file-taxes-business.component';

describe('FileTaxesBusinessComponent', () => {
  let component: FileTaxesBusinessComponent;
  let fixture: ComponentFixture<FileTaxesBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileTaxesBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileTaxesBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
