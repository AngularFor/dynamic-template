import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicForm03Component } from './dynamic-form03.component';

describe('DynamicForm03Component', () => {
  let component: DynamicForm03Component;
  let fixture: ComponentFixture<DynamicForm03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicForm03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicForm03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
