import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarwComponent } from './editarw.component';

describe('EditarwComponent', () => {
  let component: EditarwComponent;
  let fixture: ComponentFixture<EditarwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
