import { HttpClient } from '@angular/common/http'; // Corregido: HttpClient con mayúscula
import { Injectable } from '@angular/core';
import { AlumnosUtl } from './alumnos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoapiService {

  constructor(private http: HttpClient) { }

  public getAlumnosList(): Observable<AlumnosUtl[]> {
    return this.http.get<AlumnosUtl[]>('http://127.0.0.1:5000/alumnos');
  }

  agregarNuevoAlumno(datos: AlumnosUtl) {
    return this.http.post('http://127.0.0.1:5000/alumnos', datos);
  }

  public getAlumnos(mat: number): Observable<AlumnosUtl> {
    console.log(mat);
    return this.http.get<AlumnosUtl>('http://127.0.0.1:5000/alumnos/' + mat);
  }

  modificarAlumno(mat: Number, datos: AlumnosUtl) {
    return this.http.put('http://127.0.0.1:5000/alumnos/' + mat, datos);
  }

  public EliminarAlumno(mat: number): Observable<AlumnosUtl> {
    return this.http.delete<AlumnosUtl>('http://127.0.0.1:5000/alumnos/' + mat);
  }
}