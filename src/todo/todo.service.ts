import { Injectable } from '@nestjs/common';
import { AbstractService } from 'src/shared/abstract.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService extends AbstractService {
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>
  ) {
    super(todoRepository)
  }
}
