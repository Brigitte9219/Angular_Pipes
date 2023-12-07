import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = 'Brigitte';
  arreglo=[1,2,3,4,5,6,7,8,9,10];
  PI:number= Math.PI;
  porcentaje: number= 0.234;
  salario: number= 1234.5;
  fecha:Date = new Date();
  activar:boolean = true;
  idioma:string = 'fr';
  videoUrl:string='https://www.youtube.com/embed/sS90VVmBPcg?si=-rOeRthoEKp579r8';

//Trabajar con algo asincrono
  valorPromesa = new Promise<string>((resolve)=>{

    setTimeout(()=>{
      resolve('llego la data');
    }, 4500);
  });


  heroe={
    nombre:'Logan',
    clave:'Wolverine',
    edad:500,
    direccion:{
      calle:'primera',
      casa:20
    }
  }
}
