import { Injectable } from '@nestjs/common'
import { PostbackEventPayload } from '../../interfaces/line.interface'

@Injectable()
export class PostbackHandler {
  handleByEvent(event: PostbackEventPayload): any {
    return `PostbackHandler.handleByEvent()`
  }
}
