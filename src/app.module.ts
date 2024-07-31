import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TasksController } from './tasks/tasks.controller';
import { TasksModule } from './tasks/tasks.module';
@Module({
  imports: [AuthModule, TasksModule],
  controllers: [TasksController],
})
export class AppModule {}
