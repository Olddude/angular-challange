import { Component } from '@angular/core';
import { map, mergeMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { FetchService } from '../../services/fetch/fetch.service';
import { TreeService } from '../../services/tree/tree.service';
import { UrlService } from '../../services/url/url.service';

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

  url$ = this.urlService.url();

  data$ = this.url$.pipe(
    mergeMap(url => this.fetchService.fetch(url))
  );

  tree$ = this.data$.pipe(
    map(data => this.treeService.tree(data))
  );

  constructor(
    private readonly urlService: UrlService,
    private readonly fetchService: FetchService,
    private readonly treeService: TreeService
  ) { }

}
