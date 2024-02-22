import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IncrementadorComponent } from '../../components/incrementador/incrementador.component';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [FormsModule, IncrementadorComponent],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css'
})
export default class ProgressComponent {

  progreso1: number = 25;
  progreso2: number = 35;

  get getProgreso1(){
    return `${ this.progreso1 }%`
  }

  get getProgreso2(){
    return `${ this.progreso2 }%`
  }

  cambioValorHijo(valor: number) {
    console.log('hey');
    
  }

}
