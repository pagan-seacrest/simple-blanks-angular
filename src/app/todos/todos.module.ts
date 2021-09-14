import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './../components/todolist/todolist.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: "list", component: TodolistComponent}
]


@NgModule({
  declarations: [TodolistComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TodosModule { }
