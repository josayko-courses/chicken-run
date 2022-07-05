import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChickensController } from './chickens/chickens.controller';

@Module({
  imports: [],
  controllers: [AppController, ChickensController],
  providers: [AppService],
})
export class AppModule {}
