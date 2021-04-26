import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './service/api.service';
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
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
