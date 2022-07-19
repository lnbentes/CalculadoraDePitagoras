import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize, Observable } from 'rxjs';
import { Calculo } from 'src/model/Calculo';

@Injectable({
  providedIn: 'root'
})
export class CalculoService {

  constructor(
    private http: HttpClient,
    private spinner: NgxSpinnerService
  ) { }


  /**
   * Métodos para realizar as requisições:
   * 1- Inicia a animação da tela de loging.
   * 2- Faz a requisição para a API.
   * 3- Devolve o body da requisição e finaliza a animação.
   */
  getHipotenusaResultado(numero1: string, numero2: string): Observable<Calculo>{
    this.spinner.show();
    return this.http.get<Calculo>(`https://calculadora-pitagoras.herokuapp.com/hipotenusa/${numero1}/${numero2}`).pipe(finalize(() => this.spinner.hide()))
  }

  getCatetoResultado(numero1: string, numero2: string): Observable<Calculo>{
    this.spinner.show();
    return this.http.get<Calculo>(`https://calculadora-pitagoras.herokuapp.com/cateto/${numero1}/${numero2}`).pipe(finalize(() => this.spinner.hide()))
  }

}
