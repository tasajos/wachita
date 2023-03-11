import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientonComponent } from './seguimienton.component';

describe('SeguimientonComponent', () => {
  let component: SeguimientonComponent;
  let fixture: ComponentFixture<SeguimientonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguimientonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeguimientonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
