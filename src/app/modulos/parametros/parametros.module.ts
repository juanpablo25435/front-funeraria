import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { EliminarClienteComponent } from './cliente/eliminar-cliente/eliminar-cliente.component';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { ListarClienteComponent } from './cliente/listar-cliente/listar-cliente.component';
import { ListarServicioComponent } from './producto/listar-producto/listar-producto.component';
import { CrearServicioComponent } from './producto/crear-producto/crear-producto.component';
import { EditarServicioComponent } from './producto/editar-producto/editar-producto.component';
import { EliminarServicioComponent } from './producto/eliminar-producto/eliminar-producto.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EliminarClienteComponent,
    CrearClienteComponent,
    EditarClienteComponent,
    ListarClienteComponent,
    ListarServicioComponent,
    CrearServicioComponent,
    EditarServicioComponent,
    EliminarServicioComponent
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ParametrosModule { }
