import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement }    from '@angular/core';
import { By } from '@angular/platform-browser';

import { ProblemComponent } from './problem.component';
import { FormsModule } from '@angular/forms';


describe('ProblemComponent', () => {
  let component: ProblemComponent;
  let fixture: ComponentFixture<ProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the problem component with initially incorrect answer', () => {
    expect(component).toBeTruthy();
    expect(component.correct).toBeFalsy();
  });

  it('should display four buttons', () => {
    var buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons.length).toEqual(4);
  });

  it('should set correct when the answer is correct', () => {
    expect(component.correct).toBeFalsy();
    component.problem.first = 1;
    component.problem.second = 1;
    component.answerDigit5 = 2;
    component.onCheck();
    expect(component.correct).toBeTruthy();
  });

  it('should set reset correct when changing operation', () => {
    component.problem.first = 0;
    component.problem.second = 0;
    component.onCheck();
    expect(component.correct).toBeTruthy();
    component.onChange("-");
    expect(component.correct).toBeFalsy();
  });

});
