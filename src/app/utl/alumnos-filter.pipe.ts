import { Pipe, PipeTransform } from '@angular/core';
import { AlumnosUtl } from './alumnos';

@Pipe({
  name: 'alumnosFilter',
})
export class AlumnosFilterPipe implements PipeTransform {

  transform(value: AlumnosUtl[], arg: string): AlumnosUtl[] {
    let filter: string = arg ? arg.toLocaleLowerCase() : '';

    return filter ? value.filter((alumno: AlumnosUtl) =>
      alumno.nombre.toLocaleLowerCase().indexOf(filter) !== -1
    ) : value;
  }

}