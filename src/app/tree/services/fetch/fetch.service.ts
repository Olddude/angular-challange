import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FetchService {
  fetch(url: string): Observable<any> {
    return this.http.get(url);
  }

  constructor(
    private readonly http: HttpClient
  ) { }
}
