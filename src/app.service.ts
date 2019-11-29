import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello() {
    return {
      name: 'LINE_MEOW_BOT_SERVICE',
      timestamp: new Date()
    }
  }
}
