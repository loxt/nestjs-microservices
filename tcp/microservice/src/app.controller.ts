import { Body, Controller, Logger } from '@nestjs/common';
import { MathService } from './math.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor(private mathService: MathService) {}

  @MessagePattern('add')
  async accumulate(@Body('data') data: number[]): Promise<number> {
    this.logger.log(`Adding ${data.toString()}`);
    return this.mathService.accumulate(data);
  }
}
