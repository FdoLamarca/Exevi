import { Component, OnInit } from '@angular/core';
import { getLocaleTimeFormat } from '@angular/common';

@Component({
  selector: 'app-calculate-index',
  templateUrl: './calculate-index.component.html',
  styleUrls: ['./calculate-index.component.css']
})
export class CalculateIndexComponent implements OnInit {
  title = 'Cálculo índice equilibrio';
  public demoArray = [-7, 1, 5, 2, -4, 3, 0];
  public results: any[] = [];

  CheckBalancePoint(currElem, index, currArray,results) {
    
    let sumArrayLeft = [];
    let sumArrayRight = [];

    (index === 0) ?
      sumArrayLeft = currArray.slice(0, index + 1) : sumArrayLeft = currArray.slice(0, index);
    
    (index === (currArray.length) - 1) ?
      sumArrayRight = currArray.slice(index, (currArray.length)) : sumArrayRight = currArray.slice(index + 1, (currArray.length));

    if ( sumArrayLeft.reduce(function(a,b){ return a + b;},0) === sumArrayRight.reduce(function(a,b){return a + b;},0) ){
      // añadir los datos al array de información
      // (Fecha de cálculo con la hora, nombre del array, indice encontrado y tiempo que ha tardado)
      results.push('Hora',currArray,index,'Tiempo');
      return true;
    }
    return false;
  }

  comprobar(array: any[], results: any[]) {
    /* if ( array.some(this.CheckBalancePoint) ) {
      console.log('EUREKA!!!!');
      console.log(array);
      console.log(results);
    } */
    let exit = false;
    for (const x in array) {
      exit = this.CheckBalancePoint(array[x],parseInt(x),array, results);
      if (exit === true) {
        console.log('EUREKA!!!!');
        console.log(results);
        break;
      }
    }
  }

  constructor() { }
  ngOnInit() {
  }
}



