import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, tap, throwError } from 'rxjs';
import { Standards } from '../models/standards.model';

@Injectable({
  providedIn: 'root'
})
export class StandardsService {
  private standards: Standards[] = []
  constructor(private http: HttpClient) { }

  read() {
    if (this.standards.length) {
      return of(this.standards)
    }
    return this.http.get<Standards[]>(`api/standards`).pipe(
      tap((standards) => this.standards = standards),
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
