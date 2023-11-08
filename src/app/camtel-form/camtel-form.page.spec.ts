import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamtelFormPage } from './camtel-form.page';

describe('CamtelFormPage', () => {
  let component: CamtelFormPage;
  let fixture: ComponentFixture<CamtelFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CamtelFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
