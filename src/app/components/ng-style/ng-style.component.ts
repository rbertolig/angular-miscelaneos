import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano">
      Hola Mundo ... esta es una etiqueta
    </p>

   <button class="btn btn-primary mr-1" (click)="tamano = tamano + 5"  margin="15px">
        <i class="fa fa-plus"></i>
   </button>

   <button class="btn btn-danger mr-1" (click)="tamano = tamano - 5" margin="15px">
        <i class="fa fa-minus"></i>
   </button>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  tamano = 30;

  constructor() { }

  ngOnInit(): void {
  }

}
