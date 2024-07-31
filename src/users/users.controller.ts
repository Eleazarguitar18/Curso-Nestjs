import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  getUser() {
    return this.userService.getUsers();
  }
  @Post()
  crateUser() {
    return this.userService.crateUsers();
  }
  @Put()
  updateUser() {
    return this.userService.updateUsers();
  }
  @Delete()
  deleteUser() {
    return this.userService.deleteUsers();
  }
}
