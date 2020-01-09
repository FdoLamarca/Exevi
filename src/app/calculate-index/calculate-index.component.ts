import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculate-index',
  templateUrl: './calculate-index.component.html',
  styleUrls: ['./calculate-index.component.css']
})
export class CalculateIndexComponent implements OnInit {
  title = 'Cálculo índice equilibrio';
  public demoArray = [-7, 1, 5, 2, -4, 3, 0];
  public userArray: any[] = [];
  public results: any[] = [];
  public isDemo = true;
  public resultMessage: string;
  public showForm = false;
  MyForm: FormGroup;
  

  CheckBalancePoint(index, currArray, dateIni, hourIni, isDemo) {
    
    let sumArrayLeft = [];
    let sumArrayRight = [];

    (index === 0) ?
      sumArrayLeft = currArray.slice(0, index + 1) : sumArrayLeft = currArray.slice(0, index);
    
    (index === (currArray.length) - 1) ?
      sumArrayRight = currArray.slice(index, (currArray.length)) : sumArrayRight = currArray.slice(index + 1, (currArray.length));

    if ( sumArrayLeft.reduce(function(a,b){ return a + b;},0) === sumArrayRight.reduce(function(a,b){return a + b;},0) ) {
      // Add data to information array
      // (Calc date, array name, index match, time elapsed)
        const finalCheck = new Date();
        const hourFin = finalCheck.getMilliseconds();
        if (isDemo) { currArray = 'Array de ejemplo'; }
        
        this.results.unshift({Hour: dateIni, arrayName: currArray, indexNumber: index, elapsedTime: (hourFin - hourIni) + ' ms'});
        if (this.results.length>10) {this.results = this.results.slice(0,10);}
        this.resultMessage = 'El índice de equilibrio del array '+currArray+' es '+index;
        return true;
    }
    return false;
  }

  checkArray(array: any[], isDemo) {
    /* if ( array.some(this.CheckBalancePoint) ) {
    } */
    const initialCheck = new Date();
    const hourIni = initialCheck.getMilliseconds();
    const dateIni = initialCheck.toLocaleDateString() + ' ' + initialCheck.toLocaleTimeString();
    let exit = false;

    // tslint:disable-next-line: forin
    for (const x in array) {
      // tslint:disable-next-line: radix
      (isDemo) ? 
        exit = this.CheckBalancePoint( parseInt(x), array, dateIni, hourIni, isDemo) : 
        exit = this.CheckBalancePoint( parseInt(x), array, dateIni, hourIni, false);
      if (exit === true) { 
        break;
      } else {
        this.resultMessage = 'No se ha encontrado índice de equilibrio!!';
      }  
      /* if (!exit) { this.resultMessage = 'No se ha encontrado índice de equilibrio!!'} */
    }
  }

  constructor() {
    this.MyForm = new FormGroup({
      'inputArray': new FormControl('',[
        Validators.required,
        Validators.pattern('^-?[\d]+(,-?[\d]+)*$')
      ])
    });
   }
  miSubmit() {
    
    this.showForm = false;
    // Convertir el campo texto en un array
    const introArray = (this.MyForm.value.inputArray).split(',');
    this.checkArray(introArray,false);

  }
  ngOnInit() {
  }
}



