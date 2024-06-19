import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarServicioComponent } from './listar-producto.component';

describe('ListarProductoComponent', () => {
  let component: ListarServicioComponent;
  let fixture: ComponentFixture<ListarServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarServicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
