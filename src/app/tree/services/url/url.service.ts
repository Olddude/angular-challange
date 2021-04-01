import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UrlService {

  url(): Observable<string> {
    return this.route.queryParamMap.pipe(
      map(paramMap => paramMap.has(environment.url.key)
        ? paramMap.get(environment.url.key)
        : environment.url.default
      )
    );
  }

  constructor(
    private readonly route: ActivatedRoute
  ) { }

}
