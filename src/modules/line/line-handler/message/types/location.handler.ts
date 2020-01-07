import { Injectable } from '@nestjs/common'

@Injectable()
export class LocationHandler {
  handleByMessageType(events: any): any {
    return `LocationHandler.handleByMessageType()`
  }
}
