import { Component } from '@angular/core';
import { TreeService } from '../../services/tree.service';
import { map, mergeMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tree',
  template: `
    <header>
      <h1>Arbitrary JSON User Interface</h1>
      <ul>
        <li *ngIf="source">
          <a [href]="source" target="_blank">source code can be found here</a>
        </li>
        <li *ngIf="url$ | async as url">
          <a [href]="url" target="_blank">json data is fetched from here</a>
        </li>
      </ul>
    </header>
    <main>
      <section *ngIf="tree$ | async as tree">
        <app-tree-node id="ui" [model]="tree"></app-tree-node>
      </section>
    </main>
  `
})
export class TreeComponent {

  source = environment.source;

  url$ = this.service.url();

  data$ = this.url$.pipe(
    mergeMap(url => this.service.fetch(url))
  );

  tree$ = this.data$.pipe(
    map(data => this.service.tree(data))
  );

  constructor(
    private readonly service: TreeService
  ) { }

}
