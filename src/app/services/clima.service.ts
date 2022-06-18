import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  key = 'e0382f2d74399aa81f72622615602112';
  

  constructor(private http: HttpClient) { }

  getClima(ciudad: string): Observable<any> {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${this.key}`;
    return this.http.get(URL);
  }
}
