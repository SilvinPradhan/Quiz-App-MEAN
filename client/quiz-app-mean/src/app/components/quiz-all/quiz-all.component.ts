import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-all',
  templateUrl: './quiz-all.component.html',
  styleUrls: ['./quiz-all.component.scss'],
})
export class QuizAllComponent implements OnInit {
  Quizzes: any;
  currentQuiz = null;
  currentIndex = -1;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.readQuizzes();
  }

  readQuizzes() {
    this.apiService.getQuizzes().subscribe(
      (data) => {
        this.Quizzes = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  refreshQuiz() {
    this.readQuizzes();
    this.currentQuiz = null;
    this.currentIndex = -1;
  }

  setActiveQuiz(quiz: any, index: number) {
    this.currentQuiz = quiz;
    this.currentIndex = index;
    console.log(quiz);
  }

  removeQuiz(quiz: any, index: number) {
    if (window.confirm('Are you sure you want to delete this quiz?')) {
      this.apiService.deleteQuiz(quiz._id).subscribe((data) => {
        this.Quizzes.splice(index, 1);
      });
    }
  }
}
