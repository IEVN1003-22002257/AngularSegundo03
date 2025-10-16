import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Axb } from './axb';

@Component({
  selector: 'app-axb',
  standalone: true,
  imports: [ReactiveFormsModule], 
  templateUrl: './axb.component.html',
})
export class AxbComponent {
  public axbForm: FormGroup;

  public resultado: number = 0;
  public calculoRealizado: boolean = false;

  private axbLogic = new Axb();

  constructor(private fb: FormBuilder) {
    this.axbForm = this.fb.group({
      numeroA: [0, [Validators.required, Validators.pattern("^[0-9]*$")]],
      numeroB: [0, [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

  public realizarCalculo(): void {
    if (this.axbForm.valid) {
      const { numeroA, numeroB } = this.axbForm.value;
      this.resultado = this.axbLogic.calcular(numeroA, numeroB);
      this.calculoRealizado = true;
    }
  }
}