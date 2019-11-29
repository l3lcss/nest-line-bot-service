import 'dotenv/config'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(process.env.PORT || 9876)
}

// tslint:disable-next-line: no-floating-promises
bootstrap()
