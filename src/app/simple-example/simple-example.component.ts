import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

import { DynamicForm01Component } from './dynamic-form/dynamic-form01/dynamic-form01.component';
import { DynamicForm02Component } from './dynamic-form/dynamic-form02/dynamic-form02.component';
import { DynamicForm03Component } from './dynamic-form/dynamic-form03/dynamic-form03.component';

@Component({
  selector: 'app-simple-example',
  templateUrl: './simple-example.component.html',
  styleUrls: ['./simple-example.component.css']
})
export class SimpleExampleComponent implements OnInit {

  @ViewChild('dynamicForm', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.addDynamicComponent(DynamicForm01Component);
  }

  changeForm(index) {
    try {
      index = parseInt(index);
      switch (index) {
        case 1:
          this.addDynamicComponent(DynamicForm01Component);
          break;
        case 2:
          this.addDynamicComponent(DynamicForm02Component);
          break;
        case 3:
          this.addDynamicComponent(DynamicForm03Component);
          break;
        default:
          alert("Error Index: " + index);
      }
    } catch (error) {
      alert(error);
    }
  }

  addDynamicComponent(form: any) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(form)
    const component = factory.create(this.viewContainerRef.parentInjector);

    this.viewContainerRef.clear();
    this.viewContainerRef.insert(component.hostView);
  }

}
