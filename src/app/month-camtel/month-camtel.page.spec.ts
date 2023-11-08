import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonthCamtelPage } from './month-camtel.page';

describe('MonthCamtelPage', () => {
  let component: MonthCamtelPage;
  let fixture: ComponentFixture<MonthCamtelPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MonthCamtelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
