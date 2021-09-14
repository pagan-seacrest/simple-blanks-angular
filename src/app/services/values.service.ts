import { IBlank } from './../components/blank/blank.component';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ValuesService {

  private title = new BehaviorSubject<string>("");
  private content = new BehaviorSubject<string>("");
  currentTitle = this.title.asObservable();
  currentContent = this.content.asObservable();
  private start = new BehaviorSubject<boolean>(false);
  currentStart = this.start.asObservable();

  private list = new BehaviorSubject<Array<IBlank>>([{title: "", content: ""}]);
  curentList = this.list.asObservable();
  private values = new BehaviorSubject<IBlank>({title: "", content: ""});
  currentValues = this.values.asObservable();
  private modalState = new BehaviorSubject<Boolean>(false);
  currentModalState = this.modalState.asObservable();

  private todolist = new BehaviorSubject<string[]>([""]);
  currentTodo = this.todolist.asObservable();

  constructor() { }

  showModal(state: boolean) {
    this.modalState.next(state);
  }

  sendList(values: Array<IBlank> ): void {
    this.list.next(values);
  }
  sendValues(values: IBlank): void {
    this.values.next(values);
  }

  sendTodo(text: string) {
    this.todolist.next([...this.todolist.getValue(), text]);
  }

  // sendValues(title: string, content: string) {
  //   this.title.next(title);
  //   this.content.next(content);
  // }

  // isStart(b: boolean) {
  //   this.start.next(b);
  // }
}
