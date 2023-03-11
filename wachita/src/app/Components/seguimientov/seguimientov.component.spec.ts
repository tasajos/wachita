import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientovComponent } from './seguimientov.component';

describe('SeguimientovComponent', () => {
  let component: SeguimientovComponent;
  let fixture: ComponentFixture<SeguimientovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguimientovComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeguimientovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
