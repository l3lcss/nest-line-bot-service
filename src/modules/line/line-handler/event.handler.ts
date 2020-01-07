import { Injectable } from '@nestjs/common'
import { MessageHandler } from './message/message.handler'
import { PostbackHandler } from './postback/postback.handler'

@Injectable()
export class LineHandleEvent {
  private readonly lineEvents: object

  constructor(
    private readonly messageHandler: MessageHandler,
    private readonly postbackHandler: PostbackHandler
  ) {
      this.lineEvents = {
        message: this.messageHandler,
        follow: 'event type -> follow',
        unfollow: 'event type -> unfollow',
        join: 'event type -> join',
        leave: 'event type -> forleave',
        postback: this.postbackHandler,
        beacon: 'event type -> beacon'
      }
    }

  handleEvent(events: any[]): any[] {
    return events.map(event => this.lineEvents[event.type].handleByEvent(event))
  }
}
