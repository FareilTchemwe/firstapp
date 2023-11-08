import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonthOrangePage } from './month-orange.page';

describe('MonthOrangePage', () => {
  let component: MonthOrangePage;
  let fixture: ComponentFixture<MonthOrangePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MonthOrangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
