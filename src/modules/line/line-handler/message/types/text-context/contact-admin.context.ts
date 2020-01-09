import { Injectable } from '@nestjs/common'
import client from '../../../../config/line.config'
import { MessageEventPayload } from '../../../../interfaces/line.interface'
import db from '../../../../config/firebase.config'
import { RESPONSE_MODE, REPLY_MESSAGE_TYPE } from '../../../../const/line.const'

@Injectable()
export class ContactAdminContext {
  async handleByMessageContext(messageEvent: MessageEventPayload): Promise<any> {
    const { replyToken } = messageEvent

    await db.ref(`users/${messageEvent.source.userId}/messageEvents`).push(messageEvent)
    await db.ref(`users/${messageEvent.source.userId}`).update({
      responseMode: RESPONSE_MODE.LIVE_CHAT
    })

    return client.replyMessage(replyToken, {
      type: REPLY_MESSAGE_TYPE.TEXT,
      text: `Contacting admin...\nWaiting for queue...\nCheck your queue here\n⏱⏱⏱⏱⏱⏱⏱\nline://app/1653595847-nmVaNlX7`
    })
  }
}
