import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonthMtnPage } from './month-mtn.page';

describe('MonthMtnPage', () => {
  let component: MonthMtnPage;
  let fixture: ComponentFixture<MonthMtnPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MonthMtnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
