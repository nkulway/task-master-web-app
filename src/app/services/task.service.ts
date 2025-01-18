import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createTask(task: {
    title: string;
    name: string;
    completed: boolean;
    description: string;
  }): Observable<any> {
    console.log('This is the task body', task);
    return this.http.post(this.apiUrl, { task });
  }

  updateTask(
    id: number,
    updatedTask: {
      title: string;
      name: string;
      completed: boolean;
      description: string;
    }
  ): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, { task: updatedTask });
  }

  deleteTask(id: number): Observable<any> {
    console.log(`Deleting task. Task Id: ${id}`);
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
