import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Todo } from '../../types/todo';

@Component({
  selector: 'app-todo',
  standalone: false,
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  @Output() delete = new EventEmitter();
  @Input() todo!: Todo;

  @ViewChild('titleField') 
  set titleField(field: ElementRef){
    if(field) {
      field.nativeElement.focus();
    }
  };
  editing = false;
}
