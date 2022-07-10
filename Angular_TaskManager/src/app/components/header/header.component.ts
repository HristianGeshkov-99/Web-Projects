import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showAddTask!: boolean;
  subscription!: Subscription;
  buttonText: string = "Add";
  buttonValue: boolean = true;

  title = 'Task Tracker';
  constructor(private uiservice: UiService, private router: Router) {
    this.subscription = this.uiservice.onToggle().subscribe((value) => this.buttonValue = value);
   }

  ngOnInit(): void {
  }

  toggleAddTask(){
    this.uiservice.toggleAddTask(); //Show the add task form
    this.buttonValue = !this.buttonValue //change the button value so we can switch the text Add/Close
  }


  hasRoute(route: string) {
    return this.router.url === route; //Only return the URL so we can only show the button when on "/" URL
  }

}
