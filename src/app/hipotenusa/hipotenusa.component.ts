import { Component, OnInit } from '@angular/core';
import { Calculo } from 'src/model/Calculo';
import { CalculoService } from '../service/calculo.service';

@Component({
  selector: 'app-hipotenusa',
  templateUrl: './hipotenusa.component.html',
  styleUrls: ['./hipotenusa.component.css']
})
export class HipotenusaComponent implements OnInit {

  calculo: Calculo = new Calculo()

  valorA: string = "0"
  valorB: string = "0"
  valorC: string = "0"

  constructor(
    private calculoService: CalculoService
  ) { }

  ngOnInit(): void {
    window.scroll(0,0)
  }


  calcularAPI(){

      this.calculoService.getHipotenusaResultado(this.valorB, this.valorC).subscribe({next: (resp: Calculo) =>{
        this.calculo = resp
        this.valorA = this.calculo.resultado
      },
      error: erro => {
        if(erro.status == 500 || erro.status == 401 || erro.status == 400){
          this.valorA = "Use valores númericos"
        }
      },})

  }

}
