import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerWachitaComponent } from './ver-wachita.component';

describe('VerWachitaComponent', () => {
  let component: VerWachitaComponent;
  let fixture: ComponentFixture<VerWachitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerWachitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerWachitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
