import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {

  constructor( private route: ActivatedRoute ) {
    // obtner parametro de la ruta desde la misma ruta
    this.route.params.subscribe(parametros => {
      console.log('Ruta Parent');
      console.log(parametros);

    });
  }

  ngOnInit(): void {
  }

}
