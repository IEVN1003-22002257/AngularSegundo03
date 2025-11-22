import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AlumnosUtl } from '../alumnos';
import { CommonModule, Location } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ProyectoapiService } from '../proyectoapi.service';

@Component({
  selector: 'app-eliminar',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './eliminar.component.html',
  styles: ``
})
export class EliminarComponent implements OnInit {
  dataSource: any = [];
  tem: any;
  regAlumno: AlumnosUtl = {
    matricula: 0,
    nombre: '',
    apaterno: '',
    amaterno: '',
    correo: ''
  }

  constructor(private location: Location, public alumnosUtl: ProyectoapiService, private router: Router) { }

  ngOnInit() {
    this.tem = this.location.path().split('/')
    console.log("componente " + this.tem[3])
    
    this.alumnosUtl.getAlumnos(parseInt(this.tem[3])).subscribe(
      {
        next: (response: any) => {
          this.dataSource = response;
          console.log(this.dataSource)
          this.asignaCampos(this.dataSource)
        },
        error: (error: any) => console.log(error)
      }
    );
  }

  asignaCampos(dataSource: any) {
    this.regAlumno.matricula = dataSource.alumno.matricula
    this.regAlumno.nombre = dataSource.alumno.nombre
    this.regAlumno.apaterno = dataSource.alumno.apaterno
    this.regAlumno.amaterno = dataSource.alumno.amaterno
    this.regAlumno.correo = dataSource.alumno.correo
    console.log(dataSource.alumno.matricula)
  }

  eliminar() {
    console.log("funcion: " + this.tem[3])
    this.alumnosUtl.EliminarAlumno(this.tem[3]).subscribe({
      next: () => console.log("Eliminando..."),
      error: (e: any) => console.error(e),
      complete: () => {
        console.info("Eliminación completa");
        this.router.navigate(['/utl/listaalumnos']);
      }
    })
  }
}