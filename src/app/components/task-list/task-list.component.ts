import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  tasks: any[] = [];
  newTask = { title: '', name: '', completed: false, description: '' };
  editingTask: any = null;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

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
    this.editingTask = { ...task };
  }

  updateTask() {
    this.taskService
      .updateTask(this.editingTask.id, this.editingTask)
      .subscribe((data) => {
        this.fetchData();
        this.editingTask = null;
      });
  }

  cancelEdit() {
    this.editingTask = null;
  }

  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId).subscribe((data) => {
      console.log('task deleted -> ', taskId);
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
    });
  }
}
