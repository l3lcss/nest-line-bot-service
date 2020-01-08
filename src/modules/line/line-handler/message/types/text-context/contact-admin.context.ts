import { Injectable } from '@nestjs/common'
import client from '../../../../config/line.config'
import { MessageEventPayload } from '../../../../interfaces/line.interface'

@Injectable()
export class ContactAdminContext {
  async handleByMessageContext(messageEvent: MessageEventPayload): Promise<any> {
    const { replyToken } = messageEvent

    return client.replyMessage(replyToken, {
      type: 'text',
      text: `Contacting admin...\nWaiting for queue...\nCheck your queue here\n⏱⏱⏱⏱⏱⏱⏱\nline://app/1653595847-nmVaNlX7`
    })
  }
}
