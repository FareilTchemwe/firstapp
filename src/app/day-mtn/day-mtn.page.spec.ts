import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DayMtnPage } from './day-mtn.page';

describe('DayMtnPage', () => {
  let component: DayMtnPage;
  let fixture: ComponentFixture<DayMtnPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DayMtnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
