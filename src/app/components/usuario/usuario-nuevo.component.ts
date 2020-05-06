import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioNuevoComponent implements OnInit {

  constructor( private route: ActivatedRoute ) {
    // se usa '.parent' para obtener parametro del parent
    this.route.parent.params.subscribe(parametros => {
      console.log('Ruta child Nuevo');
      console.log(parametros);

    });
  }

  ngOnInit(): void {
  }

}
