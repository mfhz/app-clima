import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  urlImage = 'https://cdn-icons-png.flaticon.com/512/1116/1116453.png';
  ciudad = '';
  temperatura = 0;
  humedad = 0;
  clima = '';
  query = false;
  loading = false;
  mostrarError = false;

  constructor(private _climaService: ClimaService) { }

  ngOnInit(): void {
  }

  obtenerClima() {
    // console.log(this.ciudad);
    this.loading = true;

    this._climaService.getClima(this.ciudad).subscribe(data => {
      // console.log(data);
      this.loading = false;
      this.query = true;
      this.temperatura = data.main.temp -273;
      this.humedad = data.main.humidity;
      this.clima = data.weather[0].main;
    },err => {
      console.log(err);
      this.loading = false;
      this.error();
    });
  }

  error() {
    this.mostrarError = true;
    setTimeout(() => {
      this.mostrarError = false;
      this.ciudad = '';
    }, 3000);
  }

}
