import {
  HttpHeaders,
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // http://localhost:5000/
  baseUri: string = 'api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}
  // create quiz
  createQuiz(data: any): Observable<any> {
    let uri = `${this.baseUri}/new`;
    return this.http.post(uri, data).pipe(catchError(this.errorMgmt));
  }

  // Get all Quizzes
  getQuizzes() {
    return this.http.get(`${this.baseUri}/quizzes`);
  }

  // get single quiz
  getSingleQuiz(id: any): Observable<any> {
    let url = `${this.baseUri}/quiz/${id}`;
    return this.http.get(url);
  }

  deleteQuiz(id: any): Observable<any> {
    let url = `${this.baseUri}/quiz/${id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
