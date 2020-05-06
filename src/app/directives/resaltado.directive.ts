import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el: ElementRef) {

    console.log('Directiva llamada');

    // manipular estilos con la directiva
    el.nativeElement.style.backgroundColor = null;
  }

// hacer binding (atar) una propiedad a la directiva
// ( ambas apuntan a al mismo espacio de memoria de la variable)
// manipulando una se refleja en la otra
@Input ('appResaltado') nuevoColor: string;

// HostListener permote escuchar eventos como movimiento del mouse
// y personalizar acciones llamando un metodo disparado por el evento
@HostListener('mouseenter') mouseEntro(){
  // cuando el mouse entre a la directiva pondra amarillo el fondo
  // this.el.nativeElement.style.backgroundColor = 'yellow';

  this.resaltar( this.nuevoColor || 'yelow');
}
// cuando el mouse sale de la directiva quita el fondo al texto
@HostListener('mouseleave') mouseSalio(){
  this.el.nativeElement.style.backgroundColor = null;
}

private resaltar(color: string){
  this.el.nativeElement.style.backgroundColor = color;

}


}
