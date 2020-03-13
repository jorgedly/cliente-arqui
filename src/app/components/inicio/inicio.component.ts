import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(private conexion: ConexionService) {
  }

  ngOnInit(): void {
  }

  sensores: string[] = [
    'Inclinacion',
    'Peso',
    'Agua',
    'Luz',
    'Sonido',
    'Cardiaco',
    'Pasos',
  ];

  fechas: string[] = [
    '10',
    '11',
    '12'
  ];

  horas: string[] = [
    '00:00:00',
    '01:00:00',
    '02:00:00',
    '03:00:00',
    '04:00:00',
    '05:00:00',
    '06:00:00',
    '07:00:00',
    '08:00:00',
    '09:00:00',
    '10:00:00',
    '11:00:00',
    '12:00:00',
    '13:00:00',
    '14:00:00',
    '15:00:00',
    '16:00:00',
    '17:00:00',
    '18:00:00',
    '19:00:00',
    '20:00:00',
    '21:00:00',
    '22:00:00',
    '23:00:00'
  ];

  multi = [{ "name": "", "series": [{ "name": "", "value": 0 }] }];
  svss: boolean = false;
  filtra: boolean = false;
  sensor: string = '';
  sensor2: string = '';
  fechaInicio: string = this.fechas[0];
  horaInicio: string = this.horas[0];
  fechaFin: string = this.fechas[2];
  horaFin: string = this.horas[23];

  cambio(event) {
    if (this.filtra) {
      if (this.svss) {
        this.filtradoSensores();
      } else {
        this.filtradoSensor();
      }
    } else {
      if (this.svss) {
        this.noFiltradoSensores();
      } else {
        this.noFiltradoSensor();
      }
    }
  }

  filtradoSensor() {
    this.conexion.getFiltered(this.sensor, this.fechaInicio, this.horaInicio, this.fechaFin, this.horaFin).subscribe(
      (data: any) => {
        data = data || [{ "value": 0, "name": "" }];
        this.multi.length = 0;
        this.multi = [{ "name": this.sensor, "series": data }];
        this.xAxisLabel = 'Tiempo';
        this.yAxisLabel = this.sensor;
      }
    );
  }

  noFiltradoSensor() {
    this.conexion.getAll(this.sensor).subscribe(
      (data: any) => {
        data = data || [{ "value": 0, "name": "" }];
        this.multi.length = 0;
        this.multi = [{ "name": this.sensor, "series": data }];
        this.xAxisLabel = 'Tiempo';
        this.yAxisLabel = this.sensor;
      }
    );
  }

  filtradoSensores() {

  }

  noFiltradoSensores() {

  }

  view: any[] = [800, 400];
  showLabels: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = '';
  yAxisLabel: string = '';
  timeline: boolean = true;

}