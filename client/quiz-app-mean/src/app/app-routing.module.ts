import { QuizSingleComponent } from './components/quiz-single/quiz-single.component';
import { QuizAllComponent } from './components/quiz-all/quiz-all.component';
import { QuizCreateComponent } from './components/quiz-create/quiz-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-quiz' },
  { path: 'create-quiz', component: QuizCreateComponent },
  { path: 'quiz/:id', component: QuizSingleComponent },
  { path: 'list-quiz', component: QuizAllComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
