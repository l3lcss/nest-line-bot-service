import { Injectable } from '@nestjs/common'

@Injectable()
export class StickerHandler {
  handleByMessageType(events: any): any {
    return `StickerHandler.handleByMessageType()`
  }
}
