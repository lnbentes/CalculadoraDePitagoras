import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Calculo } from 'src/model/Calculo';

@Injectable({
  providedIn: 'root'
})
export class CalculoService {

  constructor(
    private http: HttpClient
  ) { }

  getHipotenusaResultado(numero1: string, numero2: string): Observable<Calculo>{
    return this.http.get<Calculo>(`https://calculadora-pitagoras.herokuapp.com/hipotenusa/${numero1}/${numero2}`)
  }

  getCatetoResultado(numero1: string, numero2: string): Observable<Calculo>{
    return this.http.get<Calculo>(`https://calculadora-pitagoras.herokuapp.com/cateto/${numero1}/${numero2}`)
  }

}
