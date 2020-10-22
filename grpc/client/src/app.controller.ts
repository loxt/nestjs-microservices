import { Body, Controller, Logger, OnModuleInit, Post } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { microserviceOptions } from './grpc.options';
import { IGRPCService } from './grpc.interface';

@Controller()
export class AppController implements OnModuleInit {
  private logger = new Logger('AppController');

  @Client(microserviceOptions)
  private client: ClientGrpc;

  private grpcService: IGRPCService;

  onModuleInit(): any {
    this.grpcService = this.client.getService<IGRPCService>('AppController');
  }

  @Post('add')
  async accumulate(@Body('data') data: number[]) {
    this.logger.log(`Adding ${data}`);
    return this.grpcService.accumulate({ data });
  }
}
