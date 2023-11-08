import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrangePage } from './orange.page';

describe('OrangePage', () => {
  let component: OrangePage;
  let fixture: ComponentFixture<OrangePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OrangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
