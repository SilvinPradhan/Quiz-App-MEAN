import { ApiService } from './../../service/api.service';
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
    alternative: {
      text: '',
      isCorrect: false,
    },
  };
  submitted = false;

  constructor(private quizService: ApiService) {}

  ngOnInit(): void {}
  saveQuiz(): void {
    const data = {
      title: this.quiz.title,
      description: this.quiz.description,
      alternative: [
        {
          text: this.quiz.alternative.text,
          isCorrect: this.quiz.alternative.isCorrect,
        },
      ],
    };
    this.quizService.createQuiz(data).subscribe(
      (res) => {
        console.log(res);
        this.submitted = true;
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
      alternative: {
        text: '',
        isCorrect: false,
      },
    };
  }
}
