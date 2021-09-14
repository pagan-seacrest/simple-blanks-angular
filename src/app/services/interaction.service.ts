import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ITodos {
  id: string,
  text: string,
  isCompleted: boolean 
}

export enum Filter {
  all = "all",
  active = "active",
  completed = "completed"
}

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  todos$ = new BehaviorSubject<ITodos[]>([]);
  filter$ = new BehaviorSubject<Filter>(Filter.all);

  constructor() { }

  addTodo(text: string) {
    const todo: ITodos = {
      text,
      id: Math.random().toString(16),
      isCompleted: false
    }
    const updatedTodos = [...this.todos$.getValue(), todo];
    this.todos$.next(updatedTodos)
  }
}
