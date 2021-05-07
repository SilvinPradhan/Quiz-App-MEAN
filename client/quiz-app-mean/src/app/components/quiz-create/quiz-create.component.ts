import { ApiService } from './../../service/api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-create',
  templateUrl: './quiz-create.component.html',
  styleUrls: ['./quiz-create.component.scss'],
})
export class QuizCreateComponent implements OnInit {
  quiz = {
    title: '',
    description: '',
    option1: '',
    answer1: false,
    option2: '',
    answer2: false,
    option3: '',
    answer3: false,
    option4: '',
    answer4: false,
  };
  submitted = false;

  constructor(private quizService: ApiService, private router: Router) {}

  ngOnInit(): void {}
  saveQuiz(): void {
    const data = {
      title: this.quiz.title,
      description: this.quiz.description,
      option1: this.quiz.option1,
      answer1: this.quiz.answer1,
      option2: this.quiz.option2,
      answer2: this.quiz.answer2,
      option3: this.quiz.option3,
      answer3: this.quiz.answer3,
      option4: this.quiz.option4,
      answer4: this.quiz.answer4,
    };
    this.quizService.createQuiz(data).subscribe(
      (res) => {
        console.log(res);
        this.submitted = true;
        // this.router.navigateByUrl('/list-quiz');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newQuiz(): void {
    this.submitted = false;
    this.quiz = {
      title: '',
      description: '',
      option1: '',
      answer1: false,
      option2: '',
      answer2: false,
      option3: '',
      answer3: false,
      option4: '',
      answer4: false,
    };
  }
}
