import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DayOrangePage } from './day-orange.page';

describe('DayOrangePage', () => {
  let component: DayOrangePage;
  let fixture: ComponentFixture<DayOrangePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DayOrangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
