import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/get')
  getTasks() {
    return this.appService.getTasks();
  }

  @Post('/post')
  createTask(@Body('name') name: string) {
    return this.appService.createTask({ name });
  }
}
