import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Eleazar',
      cel: 1234,
    },
    {
      id: 2,
      name: 'Geovani',
      cel: 1234,
    },
  ];
  getUsers() {
    return this.users;
  }
  crateUsers() {
    return 'creando usuario';
  }
  updateUsers() {
    return 'actualizando usuario';
  }
  deleteUsers() {
    return 'eliminando usuario';
  }
}
