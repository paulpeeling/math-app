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

  problem: Sum;

  correct: boolean = false;

  constructor() { 
    this.problem = new Sum();
  }

  ngOnInit() {
  }

  onCheck() {
    var answer = this.answerDigit1*1000 + this.answerDigit2*100 + this.answerDigit3*10 + this.answerDigit4*1; 
    if (answer == this.problem.first + this.problem.second)
    {      
      this.correct = true;
    }
  }

  onNew() {
    this.correct = false;
    this.problem = new Sum();
  }
}
