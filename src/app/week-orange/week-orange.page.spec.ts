import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeekOrangePage } from './week-orange.page';

describe('WeekOrangePage', () => {
  let component: WeekOrangePage;
  let fixture: ComponentFixture<WeekOrangePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WeekOrangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
