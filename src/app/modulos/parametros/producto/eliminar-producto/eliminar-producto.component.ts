import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfiguracionRutasBackend } from 'src/app/config/configuracion.rutas.backend';
import { ServicioModel } from 'src/app/modelos/producto.model';
import { ProductoService } from 'src/app/servicios/parametros/producto.service';

@Component({
  selector: 'app-eliminar-servicio',
  templateUrl: './eliminar-producto.component.html',
  styleUrls: ['./eliminar-producto.component.css']
})
export class EliminarServicioComponent {

  BASE_URL: String = ConfiguracionRutasBackend.urlNegocio;
  recordId: number = 0;
  nombre: string = "";
  precioVenta: number = 0;
  cantidadDisponible: number = 0;
  foto: string = "";

  constructor(
    private servicio: ProductoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.recordId = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.BuscarRegistro();
  }

  BuscarRegistro() {
    this.servicio.BuscarRegistro(this.recordId).subscribe({
      next: (datos: ServicioModel) => {
        this.recordId = datos.id!;
        this.nombre = datos.nombre!;
        this.precioVenta = datos.precioVenta!;
        this.foto = datos.foto!;
      },
      error: (err) => {
        alert("El registro no existe.")
      }
    });
  }


  EliminarRegistro() {
    this.servicio.EliminarRegistro(this.recordId).subscribe({
      next: (data: any) => {
        alert("Información eliminada correctamente");
        this.router.navigate(['/parametros/producto-listar']);
      },
      error: (err: any) => {
        alert("Ha ocurrido un error");
      }
    });
  }

}
