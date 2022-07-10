import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  showAddTask!: boolean;
  subscription!: Subscription;
  name!: string;
  day!: string;
  reminder: boolean = false;

  

  constructor(private uiservice: UiService) { 
    this.subscription = this.uiservice.onToggle().subscribe((value) => this.showAddTask = value);
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.name){
      alert("Please add a task!");
      return;
    }

    const newTask = {
      name: this.name,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);

    this.name = "";
    this.day = "";
    this.reminder = false;
  }

}
