import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const promesa = new Promise( (resolve, reject) => {
      if (false) {
      resolve('hola mundo');
      } else {
        reject('Algo salio mal');
      }      
    })
      .then( ( mensaje ) => {
      console.log(mensaje);
      })
      .catch( error => console.log('error -> ', error));

    console.log('fin del init');
    
  }

}
