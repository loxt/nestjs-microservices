import { Body, Controller, Post } from '@nestjs/common';
import { MathService } from './math.service';

@Controller()
export class AppController {
  constructor(private readonly mathService: MathService) {}

  @Post('add')
  async accumulate(@Body('data') data: number[]) {
    return this.mathService.accumulate(data);
  }
}
