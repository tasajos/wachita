import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarWachitaComponent } from './agregar-wachita.component';

describe('AgregarWachitaComponent', () => {
  let component: AgregarWachitaComponent;
  let fixture: ComponentFixture<AgregarWachitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarWachitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarWachitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
