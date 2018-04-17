import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormGeneratorComponent } from './form-generator.component';

import { FormGeneratorRouteModule } from './form-generator-route.module';

@NgModule({
  imports: [
    CommonModule,

    FormGeneratorRouteModule
  ],
  declarations: [FormGeneratorComponent]
})
export class FormGeneratorModule { }
