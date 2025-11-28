import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sinal } from '../interfaces/SinalInfo';

@Injectable({
  providedIn: 'root'
})
export class SinalService {

  constructor(private http: HttpClient) { }

  getSinais(): Observable<Sinal[]> {
    return this.http.get<Sinal[]>('/assets/data/sinais.json');
  }
}