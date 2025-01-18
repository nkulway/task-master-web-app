import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskService } from './services/task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular Application with a Rails Backend';
  tasks: any[] = [];
  newTask = { title: '', name: '', completed: false, description: '' };
  editingTask: any = null

  constructor(private taskService: TaskService) {}

  fetchData() {
    this.taskService.getTasks().subscribe((data: any) => {
      this.tasks = data;
      console.log('Here is my data => ', data);
    });
  }

  addTask() {
    this.taskService.createTask(this.newTask).subscribe((data) => {
      console.log('task added -> ', data);
      this.fetchData();
      this.newTask = { title: '', name: '', completed: false, description: '' };
    });
  }

  startEditTask(task: any) {
    this.editingTask = {...task}
  }

  updateTask() {
    this.taskService.updateTask(this.editingTask.id, this.editingTask).subscribe((data) => {
      this.fetchData()
      this.editingTask = null
    })
  }

  cancelEdit() {
    this.editingTask = null
  }

  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId).subscribe((data) => {
      console.log('task deleted -> ', taskId);
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
    });
  }
}
