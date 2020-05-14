import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileMyTaxesComponent } from './file-my-taxes.component';

describe('FileMyTaxesComponent', () => {
  let component: FileMyTaxesComponent;
  let fixture: ComponentFixture<FileMyTaxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileMyTaxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileMyTaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
