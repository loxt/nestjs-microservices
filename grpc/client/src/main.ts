import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8080);
}
bootstrap();

//
// import {
//   ClientOptions,
//   ClientProxy,
//   ClientProxyFactory,
//   Closeable,
//   Transport,
// } from '@nestjs/microservices';
// import { Logger } from '@nestjs/common';
//
// const logger = new Logger('Main');
//
// const microserviceOptions: ClientOptions = {
//   transport: Transport.TCP,
//   options: {
//     host: '127.0.0.1',
//     port: 8082,
//   },
// };
//
// const client: ClientProxy & Closeable = ClientProxyFactory.create(
//   microserviceOptions,
// );
//
// client
//   .send<number, number[]>('add', [5, 2, 3])
//   .subscribe((res: number) => logger.log(res));
