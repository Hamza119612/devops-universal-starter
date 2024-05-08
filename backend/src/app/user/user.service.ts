import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserInterface } from './interfaces/user.interface';
import { Injectable } from '@nestjs/common/decorators';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  async create(createUserDto: CreateUserDto): Promise<UserInterface> {
    const user: User = new User();
    user.name = createUserDto.name;
    user.email = createUserDto.email;

    return await this.userRepository.save(user);
  }

  async findAll(): Promise<UserInterface[]> {
    return await this.userRepository.find();
  }


}
