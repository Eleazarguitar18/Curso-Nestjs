import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTask } from './dto/create-task/create-task';

@Injectable()
export class TasksService {
  private tasks = [];
  getAllTask() {
    // if (!this.tasks) {
    //   return 'no se encontro tareas';
    // }
    return this.tasks;
  }
  createdTask(task: CreateTask) {
    task = {
      ...task,
      id: this.tasks.length + 1,
    };
    this.tasks.push(task);
    return task;
  }
  searchTask(id: number) {
    console.log(id, 'estamos en el servicio');

    const result = this.tasks.find((task) => task.id === id);
    if (!result) {
      return new NotFoundException('no hay tareas');
    }
    return result;
  }
}
