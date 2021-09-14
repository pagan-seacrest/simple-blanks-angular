import { HttpService } from './services/http.service';
import { InteractionService } from './services/interaction.service';
import { ValuesService } from './services/values.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BlankComponent } from './components/blank/blank.component';
import { HeadingComponent } from './components/heading/heading.component';
import { PanelbarComponent } from './components/panelbar/panelbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material/material.module";
import { ModalComponent } from './components/modal/modal.component'
import { TransferService } from './services/transfer.service';
import { RoutesComponent } from './components/routes/routes.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { ListComponent } from './components/list/list.component';
import { ApiComponent } from './components/api/api.component';
import { CommonModule } from '@angular/common';

const routes = [
  {path: "", component: DashboardComponent},
  {path: "list", component: TodolistComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BlankComponent,
    HeadingComponent,
    PanelbarComponent,
    ModalComponent,
    RoutesComponent,
    TodolistComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TransferService, ValuesService, InteractionService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
