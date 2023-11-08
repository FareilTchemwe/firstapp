import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamtelPage } from './camtel.page';

describe('CamtelPage', () => {
  let component: CamtelPage;
  let fixture: ComponentFixture<CamtelPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CamtelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
