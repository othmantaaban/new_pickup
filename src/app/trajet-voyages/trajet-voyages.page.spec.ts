import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrajetVoyagesPage } from './trajet-voyages.page';

describe('TrajetVoyagesPage', () => {
  let component: TrajetVoyagesPage;
  let fixture: ComponentFixture<TrajetVoyagesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TrajetVoyagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
