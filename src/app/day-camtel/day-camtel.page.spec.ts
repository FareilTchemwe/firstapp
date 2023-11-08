import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DayCamtelPage } from './day-camtel.page';

describe('DayCamtelPage', () => {
  let component: DayCamtelPage;
  let fixture: ComponentFixture<DayCamtelPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DayCamtelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
