import { Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/mongodb';
import { User } from '../../entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectEntityManager } from '@mikro-orm/nestjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectEntityManager('default')
    private readonly em: EntityManager,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.em.create(User, createUserDto);
    await this.em.persist(user).flush();
    return user;
  }

  async findAll(): Promise<User[]> {
    return this.em.find(User, {});
  }

  async findOne(id: string): Promise<User> {
    return this.em.findOne(User, { _id: id });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    if (!user) {
      throw new Error('User not found');
    }
    this.em.assign(user, updateUserDto);
    await this.em.flush();
    return user;
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    if (!user) {
      throw new Error('User not found');
    }
    await this.em.remove(user).flush();
  }
}
