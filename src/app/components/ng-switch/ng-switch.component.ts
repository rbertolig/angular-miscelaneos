import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: [
  ]
})
export class NgSwitchComponent implements OnInit {

  alertas: string[] = ['info', 'warning', 'success'];
  alertaIdx = 0;
  alerta = 'info';

  constructor() { }

  ngOnInit(): void {
  }

  cambiarAlerta(){
    ( this.alertaIdx === 3) ? this.alertaIdx = 0 : this.alertaIdx += 1;
    this.alerta = this.alertas[this.alertaIdx];

  }

}
