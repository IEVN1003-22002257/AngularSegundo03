import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Axb } from './axb';

@Component({
  selector: 'app-axb',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], 
  templateUrl: './axb.component.html',
})
export class AxbComponent {
  public axbForm: FormGroup;
  public resultado: number = 0;
  public calculoRealizado: boolean = false;
  private axbLogic = new Axb();

  constructor(private fb: FormBuilder) {
    this.axbForm = this.fb.group({
      numeroA: [0, [Validators.required]],
      numeroB: [0, [Validators.required]]
    });
  }

  public realizarCalculo(): void {
    if (this.axbForm.valid) {
      
    
      const formValues = this.axbForm.value;

      const valA = Number(formValues.numeroA);
      const valB = Number(formValues.numeroB);

      this.resultado = this.axbLogic.calcular(valA, valB);
      this.calculoRealizado = true;
    }
  }
}
