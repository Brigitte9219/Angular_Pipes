import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //paginación
  items: any[] = [
    { name: 'Item 1', description: 'Description for Item 1' },
    { name: 'Item 2', description: 'Description for Item 2' },
    { name: 'Item 3', description: 'Description for Item 3' },
    { name: 'Item 4', description: 'Description for Item 4' },
    { name: 'Item 5', description: 'Description for Item 5' },
    { name: 'Item 6', description: 'Description for Item 6' },
    { name: 'Item 7', description: 'Description for Item 7' },
    { name: 'Item 8', description: 'Description for Item 8' },
    { name: 'Item 9', description: 'Description for Item 9' },
    { name: 'Item 10', description: 'Description for Item 10' },
    { name: 'Item 11', description: 'Description for Item 11' },
    { name: 'Item 12', description: 'Description for Item 12' },
    { name: 'Item 13', description: 'Description for Item 13' },
    { name: 'Item 14', description: 'Description for Item 14' },
    { name: 'Item 15', description: 'Description for Item 15' },
    { name: 'Item 16', description: 'Description for Item 16' },
    { name: 'Item 17', description: 'Description for Item 17' },
    { name: 'Item 18', description: 'Description for Item 18' },
    { name: 'Item 19', description: 'Description for Item 19' },
  ];
  itemsPerPage: number = 5;
  currentPage: number = 1;

  get currentItems(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;//calcula la proporción de elementos que se mostrarán en la página actual
    const endIndex = startIndex + this.itemsPerPage;// muestra el rango de elementos que debe mostrar
    return this.items.slice(startIndex, endIndex);// muestra la porcion de elementos de la matriz
  }

  get totalPages(): number {
    return Math.ceil(this.items.length / this.itemsPerPage);
  }//Aquí se calcula el número total de pág

  onPageChanged(page: number): void {
    this.currentPage = page;
  }//Actualiza el currentPage (pagina seleccionada por el usuario)

  //Finaliza paginación

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
