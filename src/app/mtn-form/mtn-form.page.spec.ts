import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MtnFormPage } from './mtn-form.page';

describe('MtnFormPage', () => {
  let component: MtnFormPage;
  let fixture: ComponentFixture<MtnFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MtnFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
