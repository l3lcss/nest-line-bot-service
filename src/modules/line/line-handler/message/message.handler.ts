import { Injectable } from '@nestjs/common'
import { TextHandler } from './types/text.handler'
import { ImageHandler } from './types/image.handler'
import { VideoHandler } from './types/video.handler'
import { AudioHandler } from './types/audio.handler'
import { LocationHandler } from './types/location.handler'
import { StickerHandler } from './types/sticker.handler'
import { MessageEvent } from '@line/bot-sdk'

@Injectable()
export class MessageHandler {
  private readonly messageTypes: object

  constructor(
    private readonly textHandler: TextHandler,
    private readonly imageHandler: ImageHandler,
    private readonly videoHandler: VideoHandler,
    private readonly audioHandler: AudioHandler,
    private readonly locationHandler: LocationHandler,
    private readonly stickerHandler: StickerHandler
  ) {
      this.messageTypes = {
        text: this.textHandler,
        image: this.imageHandler,
        video: this.videoHandler,
        audio: this.audioHandler,
        location: this.locationHandler,
        sticker: this.stickerHandler
      }
    }

  async handleByEvent(event: MessageEvent): Promise<any> {
    return this.messageTypes[event.message.type].handleByMessageType(event)
  }
}
