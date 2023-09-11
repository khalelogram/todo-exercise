import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.save(createTodoDto);
  }

  @Get()
  findAll() {
    return this.todoService.find();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.todoService.findOne({
      where: {
        id: id
      }
    });
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(id, {
      status: "completed"
    });
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.todoService.delete(id);
  }
}
