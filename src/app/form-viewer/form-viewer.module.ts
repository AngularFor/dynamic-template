import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormViewerComponent } from './form-viewer.component';

import { FormViewerRouteModule } from './form-viewer-route.module';

@NgModule({
  imports: [
    CommonModule,

    FormViewerRouteModule
  ],
  declarations: [FormViewerComponent]
})
export class FormViewerModule { }
