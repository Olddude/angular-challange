import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main id="app">
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {
}
