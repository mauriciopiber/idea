import { PrismaModule } from '@ideas/library';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IdeasModule } from './ideas/ideas.module';

@Module({
  imports: [PrismaModule, IdeasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
