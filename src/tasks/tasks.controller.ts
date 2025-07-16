import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTask } from './dto/create-task/create-task';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}
  @Get()
  getAllTask() {
    return this.taskService.getAllTask();
  }
  @Get('/:id')
  getTask(@Param('id') id: string) {
    return this.taskService.searchTask(parseInt(id));
  }
  @Post()
  createdTask(@Body() task: CreateTask) {
    return this.taskService.createdTask(task);
  }
  @Get('estados/prueba')
  @HttpCode(409)
  pruebaEstados() {
    return 'probando que cambie el codigo http';
  }
}
