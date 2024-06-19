import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfiguracionPaginacion } from 'src/app/config/configuracion.paginacion';
import { ConfiguracionRutasBackend } from 'src/app/config/configuracion.rutas.backend';
import { ArchivoModel } from 'src/app/modelos/archivo.model';
import { PaginadorServicioModel } from 'src/app/modelos/paginador.producto.model';
import { ServicioModel } from 'src/app/modelos/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  urlBase: string = ConfiguracionRutasBackend.urlNegocio;
  constructor(private http: HttpClient) { }

  /**
   * Listado de productos
   * @returns 
   */
  listarRegistros(): Observable<ServicioModel[]> {
    return this.http.get<ServicioModel[]>(`${this.urlBase}producto?filter={"limit":${ConfiguracionPaginacion.registrosPorPagina}}`);
  }

  listarRegistrosPaginados(pag: number): Observable<PaginadorServicioModel> {
    let limit = ConfiguracionPaginacion.registrosPorPagina;
    let skip = (pag - 1) * limit;
    return this.http.get<PaginadorServicioModel>(`${this.urlBase}producto-paginado?filter={"limit":${limit}, "skip":${skip}, "order":"id DESC"}`);
  }

  AgregarRegistro(registro: ServicioModel):Observable<ServicioModel>{
    return this.http.post(`${this.urlBase}producto`, registro);
  }

  EditarRegistro(registro: ServicioModel):Observable<ServicioModel>{
    return this.http.put(`${this.urlBase}producto/${registro.id}`, registro);
  }
  
  CargarArchivo(formData: FormData): Observable<ArchivoModel> {
    return this.http.post<ArchivoModel>(`${this.urlBase}cargar-archivo-producto`, formData);
  }

  BuscarRegistro(id: number): Observable<ServicioModel>{
    return this.http.get<ServicioModel>(`${this.urlBase}producto/${id}`);
  }

  EliminarRegistro(id: number): Observable<any>{
    return this.http.delete<any>(`${this.urlBase}producto/${id}`);
  }

}
