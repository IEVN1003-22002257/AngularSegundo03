import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Distancia } from './distancia';

@Component({
  selector: 'app-distancia',
  standalone: true,
  imports: [
    FormsModule, 
    ReactiveFormsModule, 
    CommonModule
  ],
  templateUrl: './distancia.component.html',
  styleUrls: ['./distancia.component.css']
})
export class DistanciaComponent implements OnInit {
  
  formulario!: FormGroup;
  resultado: string | null = null;

  ngOnInit(): void {
    this.formulario = new FormGroup({
      x1: new FormControl(null),
      y1: new FormControl(null),
      x2: new FormControl(null),
      y2: new FormControl(null),
    });
  }

  calcularDistanciaPuntos(): void {
    if (this.formulario.invalid) {
      return;
    }

    const valores = this.formulario.value;


    const distanciaCalculada = Distancia.calcular(
      valores.x1, 
      valores.y1, 
      valores.x2, 
      valores.y2
    );
    
    this.resultado = distanciaCalculada.toFixed(4);
  }
}
