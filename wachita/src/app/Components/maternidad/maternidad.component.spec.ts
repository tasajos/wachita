import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaternidadComponent } from './maternidad.component';

describe('MaternidadComponent', () => {
  let component: MaternidadComponent;
  let fixture: ComponentFixture<MaternidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaternidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaternidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
