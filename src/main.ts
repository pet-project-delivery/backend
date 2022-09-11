import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const start = async () => {
  try {
    const app = await NestFactory.create(AppModule);

    await app.enableCors();
    await app.listen(5000);
  } catch (error) {
    console.log(error);
  }
};

start();
