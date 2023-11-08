import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeekMtnPage } from './week-mtn.page';

describe('WeekMtnPage', () => {
  let component: WeekMtnPage;
  let fixture: ComponentFixture<WeekMtnPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WeekMtnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
