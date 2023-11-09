import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuccesPage } from './succes.page';

describe('SuccesPage', () => {
  let component: SuccesPage;
  let fixture: ComponentFixture<SuccesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SuccesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
