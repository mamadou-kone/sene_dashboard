import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HopitauxComponent } from './achat.component';

describe('HopitauxComponent', () => {
  let component: HopitauxComponent;
  let fixture: ComponentFixture<HopitauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HopitauxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HopitauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
