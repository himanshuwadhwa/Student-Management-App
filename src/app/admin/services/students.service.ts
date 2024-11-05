import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, tap, throwError } from 'rxjs';
import { StudentsTableData } from '../models/students.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private students!: StudentsTableData[];
  constructor(private http: HttpClient) { }

  read() {
    if (this.students) {
      return of(this.students)
    }
    return this.http.get<StudentsTableData[]>(`api/students`).pipe(
      tap((students) => this.students = students),
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.warn('Client Error', error.message)
    } else {
      console.warn('Server Error', error.message)
    }
    return throwError(() => new Error(error.message))
  }
}
