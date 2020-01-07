import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello() {
    const HELLO_TS_3_7 = {
      name: `LINE_MEOW_BOT_SERVICE`
    }

    return {
      name: HELLO_TS_3_7?.name,
      timestamp: new Date()
    }
  }
}
