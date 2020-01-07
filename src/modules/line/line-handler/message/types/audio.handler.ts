import { Injectable } from '@nestjs/common'

@Injectable()
export class AudioHandler {
  handleByMessageType(events: any): any {
    return `AudioHandler.handleByMessageType()`
  }
}
