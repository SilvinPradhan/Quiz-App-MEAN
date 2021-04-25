import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSingleComponent } from './quiz-single.component';

describe('QuizSingleComponent', () => {
  let component: QuizSingleComponent;
  let fixture: ComponentFixture<QuizSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
