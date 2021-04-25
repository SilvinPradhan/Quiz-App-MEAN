import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizCreateComponent } from './components/quiz-create/quiz-create.component';
import { QuizAllComponent } from './components/quiz-all/quiz-all.component';
import { QuizSingleComponent } from './components/quiz-single/quiz-single.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizCreateComponent,
    QuizAllComponent,
    QuizSingleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
