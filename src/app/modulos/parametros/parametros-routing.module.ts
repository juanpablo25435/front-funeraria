import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarServicioComponent } from './producto/listar-producto/listar-producto.component';
import { CrearServicioComponent } from './producto/crear-producto/crear-producto.component';
import { EliminarServicioComponent } from './producto/eliminar-producto/eliminar-producto.component';
import { EditarServicioComponent } from './producto/editar-producto/editar-producto.component';
import { ListarClienteComponent } from './cliente/listar-cliente/listar-cliente.component';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { EliminarClienteComponent } from './cliente/eliminar-cliente/eliminar-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';

const routes: Routes = [
  {
    path:"servicio-listar",
    component: ListarServicioComponent
  },
  {
    path:"servicio-agregar",
    component: CrearServicioComponent
  },
  {
    path:"servicio-eliminar/:id",
    component: EliminarServicioComponent
  },
  {
    path:"servicio-editar/:id",
    component: EditarServicioComponent
  },
  {
    path:"cliente-listar",
    component: ListarClienteComponent
  },
  {
    path:"cliente-agregar",
    component: CrearClienteComponent
  },
  {
    path:"cliente-eliminar/:id",
    component: EliminarClienteComponent
  },
  {
    path:"cliente-editar/:id",
    component: EditarClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
