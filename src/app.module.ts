import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { LineModule } from './modules/line/line.module'

@Module({
  imports: [LineModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
