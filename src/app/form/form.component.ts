import { Component } from '@angular/core';
import { FormFieldComponent } from '../form-field/form-field.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormFieldComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {}
