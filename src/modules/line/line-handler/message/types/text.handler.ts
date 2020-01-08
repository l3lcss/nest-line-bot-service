import { Injectable } from '@nestjs/common'
import client from '../../../config/line.config'
import { MessageEventPayload } from '../../../interfaces/line.interface'
import { ContactAdminContext } from './text-context/contact-admin.context'
import { MappingContext } from '../../../lib/mapping-context'
import { MessageAPIResponseBase } from '@line/bot-sdk'

@Injectable()
export class TextHandler {
  private readonly messageContext: object

  constructor(
    private readonly contactAdminContext: ContactAdminContext
  ) {
      this.messageContext = {
        contactAdmin: this.contactAdminContext
      }
    }

  async handleByMessageType(messageEvent: MessageEventPayload): Promise<any> {
    const { message: { text } } = messageEvent

    return this.messageContext[MappingContext.detector[text]]?.handleByMessageContext(messageEvent) ?? this.replyDefaultMessage(messageEvent)
  }

  private async replyDefaultMessage(messageEvent: MessageEventPayload): Promise<MessageAPIResponseBase> {
    const { message: { text }, replyToken } = messageEvent

    return client.replyMessage(replyToken, {
      type: 'text',
      text
    })
  }
}
