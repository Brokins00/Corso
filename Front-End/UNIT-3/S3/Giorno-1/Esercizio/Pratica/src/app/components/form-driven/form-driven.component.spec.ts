import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDrivenComponent } from './form-driven.component';

describe('FormDrivenComponent', () => {
  let component: FormDrivenComponent;
  let fixture: ComponentFixture<FormDrivenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormDrivenComponent]
    });
    fixture = TestBed.createComponent(FormDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
