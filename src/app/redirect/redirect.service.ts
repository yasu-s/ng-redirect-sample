import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RedirectService {
  constructor(private http: HttpClient) {}

  getMappings(id: string): Observable<{ [key: string]: string }> {
    const url = `./assets/mappings/${id}.json`;
    return this.http.get<{ [key: string]: string }>(url).pipe(
      catchError(() => {
        return of({ memo: 'error' });
      }),
    );
  }
}
