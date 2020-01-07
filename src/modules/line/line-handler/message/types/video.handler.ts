import { Injectable } from '@nestjs/common'

@Injectable()
export class VideoHandler {
  handleByMessageType(events: any): any {
    return `VideoHandler.handleByMessageType()`
  }
}
