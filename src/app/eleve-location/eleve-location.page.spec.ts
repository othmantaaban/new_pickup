import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EleveLocationPage } from './eleve-location.page';

describe('EleveLocationPage', () => {
  let component: EleveLocationPage;
  let fixture: ComponentFixture<EleveLocationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EleveLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
