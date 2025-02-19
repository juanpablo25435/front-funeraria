import { Component } from '@angular/core';
import { ServicioModel } from 'src/app/modelos/producto.model';
import { ProductoService } from 'src/app/servicios/parametros/producto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  listaRegistros: ServicioModel[] = [];

  constructor(
    private servicio: ProductoService
  ){

  }

  ngOnInit(){
    this.servicio.listarRegistros().subscribe({
      next: (datos) => {
        this.listaRegistros = datos;
      },
      error: (err) => {

      }
    });
  }

}
