import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Zodiaco } from './zodiaco';

@Component({
  selector: 'app-zodiaco',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './zodiaco.component.html',
  styleUrls: ['./zodiaco.component.css']
})
export class ZodiacoComponent implements OnInit {

  formulario!: FormGroup;
  
  resultadoVisible = false;

  nombreCompleto = '';
  edad = 0;
  signo = { nombre: '', imagenUrl: '' };

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      paterno: new FormControl(''),
      materno: new FormControl(''),
      dia: new FormControl(null),
      mes: new FormControl(null),
      anio: new FormControl(null),
      sexo: new FormControl('')
    });
  }

  imprimirInformacion(): void {
    if (this.formulario.invalid) {
      return;
    }

    const valores = this.formulario.value;


    this.nombreCompleto = Zodiaco.getNombreCompleto(valores.nombre, valores.paterno, valores.materno);
    this.edad = Zodiaco.calcularEdad(valores.dia, valores.mes, valores.anio);
    this.signo = Zodiaco.getSignoZodiacal(valores.anio);
    
    this.resultadoVisible = true;
  }
}