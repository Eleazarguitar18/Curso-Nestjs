import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TasksController } from './tasks/tasks.controller';
import { TasksModule } from './tasks/tasks.module';
import { CoModule } from './s/co/co.module';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { TasksService } from './tasks/tasks.service';
@Module({
  imports: [AuthModule, TasksModule, CoModule, UsersModule],
  controllers: [TasksController, UsersController],
  providers: [UsersService, TasksService],
})
export class AppModule {}

