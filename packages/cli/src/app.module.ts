import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommandModule } from './command/command.module';

@Module({
  imports: [CommandModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
