import { Injectable } from '@nestjs/common'

@Injectable()
export class ImageHandler {
  handleByMessageType(events: any): any {
    return `ImageHandler.handleByMessageType()`
  }
}
