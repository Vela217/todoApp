import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  title = 'miApp';
  lista = ["Aprender", "Angular", "Hoy"]
  bandera = true
  protected name = "Juan Nicolas Vela Tovar"
  edad = 21
}
