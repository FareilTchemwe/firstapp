import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrangeFormPage } from './orange-form.page';

describe('OrangeFormPage', () => {
  let component: OrangeFormPage;
  let fixture: ComponentFixture<OrangeFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OrangeFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
