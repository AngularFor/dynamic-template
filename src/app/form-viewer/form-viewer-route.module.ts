import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormViewerComponent } from './form-viewer.component';

const routes: Routes = [
  {
    path: "",
    component: FormViewerComponent,
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class FormViewerRouteModule { }
