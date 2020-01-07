import { Injectable } from '@nestjs/common'
import client from '../../../config/line.config'
import { MessageEventPayload } from '../../../interfaces/line.interface'

@Injectable()
export class TextHandler {
  async handleByMessageType(messageEvent: MessageEventPayload): Promise<any> {
    const { message: { text }, replyToken } = messageEvent

    return client.replyMessage(replyToken, {
      type: 'text',
      text
    })
  }
}
