import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoWachitaComponent } from './listado-wachita.component';

describe('ListadoWachitaComponent', () => {
  let component: ListadoWachitaComponent;
  let fixture: ComponentFixture<ListadoWachitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoWachitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoWachitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
