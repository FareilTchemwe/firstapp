import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeekCamtelPage } from './week-camtel.page';

describe('WeekCamtelPage', () => {
  let component: WeekCamtelPage;
  let fixture: ComponentFixture<WeekCamtelPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WeekCamtelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
