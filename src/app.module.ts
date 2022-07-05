import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChickensController } from './chickens/chickens.controller';
import { ChickensService } from './chickens/chickens.service';

@Module({
  imports: [],
  controllers: [AppController, ChickensController],
  providers: [AppService, ChickensService],
})
export class AppModule {}
