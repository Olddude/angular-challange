import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tree', pathMatch: 'full' },
  {
    path: 'tree',
    loadChildren: () => import('./tree/tree.module')
      .then(m => m.TreeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
