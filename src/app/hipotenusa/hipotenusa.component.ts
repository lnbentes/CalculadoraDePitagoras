import { Component, OnInit } from '@angular/core';
import { Validacao } from '../validacao/validacao';

@Component({
  selector: 'app-hipotenusa',
  templateUrl: './hipotenusa.component.html',
  styleUrls: ['./hipotenusa.component.css']
})
export class HipotenusaComponent implements OnInit {

  valida: Validacao = new Validacao()

  valorA: number = 0
  valorB: string = "0"
  valorC: string = "0"
  b: number = 0
  c: number = 0

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

  /**
   * Realiza os calculos da teoria de Pitágoras
   */
  calcular(){
    if(this.valida.eNumerico(this.valorB) || this.valida.eNumerico(this.valorC)){

      this.b = this.valida.converterParaNumero(this.valorB)
      this.c = this.valida.converterParaNumero(this.valorC)

      this.valorA = Math.sqrt((Math.pow(this.b, 2) + Math.pow(this.c, 2)))
    }else{
      alert("Use valores numéricos!")
    }

  }

}
