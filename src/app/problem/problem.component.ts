import { Component, OnInit } from '@angular/core';
import { Sum } from '../sum';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})

export class ProblemComponent implements OnInit {

  answerDigit1 : number = 0;
  answerDigit2 : number = 0;
  answerDigit3 : number = 0;
  answerDigit4 : number = 0;
  answerDigit5 : number = 0;

  problem: Sum;

  upperSize : number = 3;
  lowerSize : number = 3;

  correct: boolean = false;
  operation: string;

  constructor() { 
    this.problem = new Sum("+", this.upperSize, this.lowerSize);
  }

  ngOnInit() {
  }

  onCheck() {
    var answer = this.answerDigit1*10000 + 
      this.answerDigit2*1000 + 
      this.answerDigit3*100 + 
      this.answerDigit4*10 + 
      this.answerDigit5*1; 
    var expected = this.problem.first + this.problem.second;
    if (this.operation == "-")
    {
      expected = this.problem.first - this.problem.second;
    }
    if (answer == expected)
    {      
      this.correct = true;
    }
  }

  onNew() {
    this.correct = false;
    this.problem = new Sum("+", this.upperSize, this.lowerSize);
  }

  onChange(value:string) : void {
    this.operation = value;
    this.correct = false;
    this.problem = new Sum("+", this.upperSize, this.lowerSize);
  }

  onEasier() {
    if (this.upperSize == this.lowerSize)
    {
      this.lowerSize--;
    } else {
      this.upperSize--;
    }
    this.correct = false;
    this.problem = new Sum("+", this.upperSize, this.lowerSize);
  }

  onHarder() {
    if (this.upperSize == this.lowerSize) 
    {
      this.upperSize++;
    } else {
      this.lowerSize++;
    }
    this.correct = false;
    this.problem = new Sum("+", this.upperSize, this.lowerSize);
  }

}
