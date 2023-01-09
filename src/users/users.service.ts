import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './enitities/user.enitity';

@Injectable()
export class UsersService {
  private users: User[] = [];

  findAll(name?: string) {
    if (name) {
      return this.users.filter((user) => user.name === name);
    }
    return this.users;
  }

  findById(userId: number): User {
    return this.users.find((user) => user.id === userId);
  }

  createUser(createUserDto: CreateUserDto): User {
    const newUser = { id: Date.now(), ...createUserDto };

    this.users.push(newUser);
    return newUser;
  }
}
