import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TreeNode } from '../models/tree-node';

@Injectable({ providedIn: 'root' })
export class TreeService {

  url(): Observable<string> {
    return this.route.queryParamMap.pipe(
      map(paramMap => paramMap.has(environment.url.key)
        ? paramMap.get(environment.url.key)
        : environment.url.default
      )
    );
  }

  fetch(url: string): Observable<any> {
    return this.http.get(url);
  }

  children(value: any): any[] {
    return !!value && typeof value === 'object'
      ? Object.entries(value)
              .map(entry => ({ label: entry[0], value: entry[1] }))
      : [];
  }

  tree(value: any, label?: string): TreeNode {
    const children = this.children(value);
    const hasChildren = children.length > 0;
    let tree: TreeNode = { label, value };
    if (hasChildren) {
      tree = {
        ...tree,
        children: children.map(childEntry => {
          return this.tree(childEntry.value, childEntry.label);
        })
      };
    }
    return tree;
  }

  constructor(
    private readonly http: HttpClient,
    private readonly route: ActivatedRoute
  ) { }

}
