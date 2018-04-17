import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormGeneratorComponent } from './form-generator.component';

const routes: Routes = [
  {
    path: '',
    component: FormGeneratorComponent
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class FormGeneratorRouteModule { }
