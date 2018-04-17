import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'form-generator',
    loadChildren: './form-generator/form-generator.module#FormGeneratorModule',
  },
  {
    path: 'form-viewer',
    loadChildren: './form-viewer/form-viewer.module#FormViewerModule',
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouteModule { }
