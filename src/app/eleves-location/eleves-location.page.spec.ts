import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElevesLocationPage } from './eleves-location.page';

describe('ElevesLocationPage', () => {
  let component: ElevesLocationPage;
  let fixture: ComponentFixture<ElevesLocationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ElevesLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
