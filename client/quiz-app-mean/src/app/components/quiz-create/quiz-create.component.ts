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
    alternative: [
      {
        text1: '',
        isCorrect1: false,
      },
      {
        text2: '',
        isCorrect2: false,
      },
      {
        text3: '',
        isCorrect3: false,
      },
      {
        text4: '',
        isCorrect4: false,
      },
    ],
  };
  submitted = false;

  constructor(private quizService: ApiService, private router: Router) {}

  ngOnInit(): void {}
  saveQuiz(): void {
    const data = {
      title: this.quiz.title,
      description: this.quiz.description,
      alternative: [
        {
          text1: this.quiz.alternative[0].text1,
          isCorrect1: this.quiz.alternative[0].isCorrect1,
        },
        {
          text2: this.quiz.alternative[1].text2,
          isCorrect2: this.quiz.alternative[1].isCorrect2,
        },
        {
          text3: this.quiz.alternative[2].text3,
          isCorrect3: this.quiz.alternative[2].isCorrect3,
        },
        {
          text4: this.quiz.alternative[3].text4,
          isCorrect4: this.quiz.alternative[3].isCorrect4,
        },
      ],
    };
    this.quizService.createQuiz(data).subscribe(
      (res) => {
        console.log(res);
        this.submitted = true;
        this.router.navigateByUrl('/list-quiz');
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
      alternative: [
        {
          text1: '',
          isCorrect1: false,
        },
        {
          text2: '',
          isCorrect2: false,
        },
        {
          text3: '',
          isCorrect3: false,
        },
        {
          text4: '',
          isCorrect4: false,
        },
      ],
    };
  }
}
