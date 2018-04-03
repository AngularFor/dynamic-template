import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { SimpleExampleComponent } from './simple-example.component'

const routes: Routes = [
  {
    path: '',
    component: SimpleExampleComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleExampleRouteModule { }
