import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MtnPage } from './mtn.page';

describe('MtnPage', () => {
  let component: MtnPage;
  let fixture: ComponentFixture<MtnPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MtnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
