import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileTaxesUserComponent } from './file-taxes-user.component';

describe('FileTaxesUserComponent', () => {
  let component: FileTaxesUserComponent;
  let fixture: ComponentFixture<FileTaxesUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileTaxesUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileTaxesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
