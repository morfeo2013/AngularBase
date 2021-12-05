import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'usuarioCrud';


  personas:Persona[]=[new Persona('fredy','rios'),new Persona('juan','ruiz') ,new Persona('juan','ruiz')]


 /* agregamos las variables y el metodo */
 nombreInput:string = '';
  apellidoInput:string = '';

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personas.push( persona1 );
  }
  



}
