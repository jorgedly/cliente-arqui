import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  constructor(private http: HttpClient) { }

  getAll(sensor) {
    return this.http.get(`https://servidor-arqui.herokuapp.com/seleccion/${sensor}`);
  }

  getFiltered(sensor, fini, hini, ffin, hfin) {
    return this.http.get(`https://servidor-arqui.herokuapp.com/seleccion/${sensor}/${fini}/${hini}/${ffin}/${hfin}`);
  }
  
}
