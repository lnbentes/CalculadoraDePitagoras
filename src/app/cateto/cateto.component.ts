import { Component, OnInit } from '@angular/core';
import { Calculo } from 'src/model/Calculo';
import { CalculoService } from '../service/calculo.service';

@Component({
  selector: 'app-cateto',
  templateUrl: './cateto.component.html',
  styleUrls: ['./cateto.component.css']
})
export class CatetoComponent implements OnInit {


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

  /**
   * 1- Faz a requisição para a API passando os valores em string.
   * 2- Devolve o resultado em string calculado pela API.
   * 3- Em caso de erro devolve uma string com a mensagem.
   */
  calcularAPI(){

      this.calculoService.getCatetoResultado(this.valorB, this.valorC).subscribe({next: (resp: Calculo) =>{
        this.calculo = resp
        this.valorA = this.calculo.resultado
      },
      error: erro => {
        if(erro.status == 500 || erro.status == 401){
          this.valorA = "Use valores númericos"
        }
        if(erro.status == 400){
          this.valorA = "Erro: a > b ou c"
        }
      },})

  }

}
