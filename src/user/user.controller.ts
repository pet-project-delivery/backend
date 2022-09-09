import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';
import { User } from './schema/user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  GetUserById(@Param('id') id: string): Promise<User> {
    return this.userService.getOneUser(id);
  }

  @Post()
  createUser(@Body() CreateUserDto: createUserDto): Promise<User> {
    return this.userService.createUser(CreateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<User> {
    return this.userService.remove(id);
  }

  @Put(':id')
  updateUser(
    @Param('id') id: string,
    @Body() UpdateUserDto: updateUserDto,
  ): Promise<User> {
    return this.userService.update(id, UpdateUserDto);
  }
}
