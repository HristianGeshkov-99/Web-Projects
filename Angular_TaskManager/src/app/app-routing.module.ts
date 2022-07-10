import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TasksComponent } from "./components/tasks/tasks.component";
import { AboutComponent } from "./components/about/about.component";

const appRoutes: Routes =[
    {path: '', component: TasksComponent},
    {path:'about', component: AboutComponent}
  ]

@NgModule({
imports:[RouterModule.forRoot(appRoutes)]
})

export class AppRoutingModule { }