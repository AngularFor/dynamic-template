import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleExampleComponent } from './simple-example.component';
import { DynamicForm01Component } from './dynamic-form/dynamic-form01/dynamic-form01.component';
import { DynamicForm02Component } from './dynamic-form/dynamic-form02/dynamic-form02.component';
import { DynamicForm03Component } from './dynamic-form/dynamic-form03/dynamic-form03.component';

import { SimpleExampleRouteModule } from './simple-example-route.module';

@NgModule({
  imports: [
    CommonModule,
    
    SimpleExampleRouteModule
  ],
  declarations: [
    SimpleExampleComponent,
    DynamicForm01Component,
    DynamicForm02Component,
    DynamicForm03Component
  ],
  entryComponents: [
    DynamicForm01Component,
    DynamicForm02Component,
    DynamicForm03Component
  ]
})
export class SimpleExampleModule { }
