import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor() { }
  localQuestion: string[] = JSON.parse(localStorage.getItem('questions'));
  questionInput: string =''
  questionArr: string[] = [];


  ngOnInit(): void {
    this.questionArr = this.localQuestion ? this.localQuestion : [];
  }

  onChangeInput(e: Event): void {
    this.questionInput = (e.target as HTMLInputElement).value;
  }

  submitQuestion() {
    this.questionArr.push(this.questionInput);
    localStorage.setItem('questions', JSON.stringify(this.questionArr));
    this.questionInput = "";
  }

}
