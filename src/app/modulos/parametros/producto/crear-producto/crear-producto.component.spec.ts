import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearServicioComponent } from './crear-producto.component';

describe('CrearProductoComponent', () => {
  let component: CrearServicioComponent;
  let fixture: ComponentFixture<CrearServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearServicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
