import { Todo } from './../../../../../../angular-todo-list/src/Models/todo.module';
import { ValuesService } from './../../services/values.service';
import { InteractionService } from './../../services/interaction.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface TD {
  content: string,
    completed: boolean
}

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  todos: TD[] = [];
  inputTodo: string = "";

  constructor() { }
  
  ngOnInit(): void {
    this.todos = [
        // { content: "1st td", completed: false},
        // { content: "2nd td", completed: true}
    ]
  }

  toggle(id: any) {
    this.todos.map((td, i) => {
      if (i === id) {
        td.completed = !td.completed;
      }

      return td;
    })
  }

  remove(id: any) {
    this.todos = this.todos.filter((td, i) => i !== id)
  }

  add() {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })

    this.inputTodo = "";
  }

}
