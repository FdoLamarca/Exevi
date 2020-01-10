import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculate-index',
  templateUrl: './calculate-index.component.html',
  styleUrls: ['./calculate-index.component.css']
})
export class CalculateIndexComponent implements OnInit {
  title = 'Cálculo índice equilibrio';
  public demoArray : any[];
  public userArray: any[];
  public results: any[];
  public isDemo: boolean;
  public resultMessage: string;
  public showForm = false;
  public hourIni: number;
  public hourFin: number;
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
        this.hourFin = finalCheck.getMilliseconds();
        if (isDemo) { currArray = 'Array de ejemplo'; }
        
        this.results.unshift({Hour: dateIni, arrayName: currArray, indexNumber: index, elapsedTime: (this.hourFin - hourIni) + ' ms'});
        if (this.results.length>10) {this.results = this.results.slice(0,10);}
        this.resultMessage = 'El índice de equilibrio del array ['+currArray+'] es '+index;
        return true;
    }
    if ( index >= currArray.length-1){
      const finalCheck = new Date();
        this.hourFin = finalCheck.getMilliseconds();
    }
    return false;
  }

  checkArray(array: any[], isDemo) {
    /* if ( array.some(this.CheckBalancePoint) ) {
    } */
    const initialCheck = new Date();
    this.hourIni = initialCheck.getMilliseconds();
    const dateIni = initialCheck.toLocaleDateString() + ' ' + initialCheck.toLocaleTimeString();
    let exit = false;

    // tslint:disable-next-line: forin
    for (const x in array) {
      // tslint:disable-next-line: radix
      (isDemo) ? 
        exit = this.CheckBalancePoint( parseInt(x), array, dateIni, this.hourIni, isDemo) : 
        exit = this.CheckBalancePoint( parseInt(x), array, dateIni, this.hourIni, false);
      if (exit === true) { 
        break;
      }else{
        if (parseInt(x) >= array.length-1){
          this.resultMessage = 'No se ha encontrado índice de equilibrio!!';
          this.results.unshift({Hour: dateIni, arrayName: array, indexNumber: 'No hay indice', elapsedTime: (this.hourFin - this.hourIni) + ' ms'});
        }
      }  
    }
  }

  miSubmit() {
    // Convertir el campo texto en un array
    const introArray = (this.MyForm.value.inputArray).split(',');
    this.checkArray(introArray,false);
    this.MyForm.reset();
    this.showForm = false;

  }

  constructor() {
    this.demoArray = [-7, 1, 5, 2, -4, 3, 0];
    this.userArray = [];
    this.results = [];
    this.isDemo = true;
    this.hourIni = 0;
    this.hourFin = 0;
   }
  
  ngOnInit() {

    this.MyForm = new FormGroup({
      inputArray: new FormControl('',[
        Validators.required,
        Validators.pattern('^-?[\d]+(,-?[\d]+)*$')
      ])
    });
    
  }
}




