import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private tasks = [];

  getTasks() {
    return this.tasks;
  }

  createTask({ name }) {
    this.tasks.push(name);

    return this.tasks;
  }
}
