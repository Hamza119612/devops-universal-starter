import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { UserInterface } from './interfaces/user.interface';
import { Body, Controller, Get, Post } from '@nestjs/common/decorators';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserInterface> {
    return await this.userService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<UserInterface[]> {
    return await this.userService.findAll();
  }
}
