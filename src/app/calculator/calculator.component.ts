import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  number1 = 0;
  number2 = 0;
  result = 0;

  addition(n1: any, n2: any) {
    this.result = n1 + n2;
  }

  divide(n1: any, n2: any) {
    this.result = n1 / n2;
  }

  multilication(n1: any, n2: any) {
    this.result = n1 * n2;
  }

  subtraction(n1: any, n2: any) {
    this.result = n1 - n2;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
