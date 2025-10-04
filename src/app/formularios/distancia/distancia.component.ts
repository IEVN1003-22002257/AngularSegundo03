import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  resultado: string | null=null;

  ngOnInit(): void {
    this.formulario = new FormGroup({
      x1:new FormControl(null),
      y1:new FormControl(null),
      x2:new FormControl(null),
      y2:new FormControl(null),
    });
  }


  calcularDistanciaPuntos(): void {
    const x1=this.formulario.value.x1;
    const y1=this.formulario.value.y1;
    const x2=this.formulario.value.x2;
    const y2=this.formulario.value.y2;

    const puntos=new Distancia(x1, y1, x2, y2);
    
    const distanciaCalculada=puntos.calcular();
    
    this.resultado=distanciaCalculada.toFixed(4);
  }
}

