import { Controller, Post, Body, Get } from '@nestjs/common'
import { LineHandleEvent } from '../line-handler/event.handler'
import { WebhookRequestBody } from '@line/bot-sdk'

@Controller('line')
export class LineController {
  constructor(
    private readonly lineHandleEvent: LineHandleEvent
  ) {}

  @Get()
  helloLineMeow() {
    return 'Hello Line Meow :3'
  }

  @Post('webhook')
  async lineWebhook(@Body() { events }: WebhookRequestBody): Promise<any> {
    return this.lineHandleEvent.handleEvent(events)
  }
}
