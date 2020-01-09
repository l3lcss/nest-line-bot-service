import { Module } from '@nestjs/common'
import { LineController } from './controllers/line.controller'
import { LineHandleEvent } from './line-handler/event.handler'
import { MessageHandler } from './line-handler/message/message.handler'
import { TextHandler } from './line-handler/message/types/text.handler'
import { ImageHandler } from './line-handler/message/types/image.handler'
import { VideoHandler } from './line-handler/message/types/video.handler'
import { AudioHandler } from './line-handler/message/types/audio.handler'
import { LocationHandler } from './line-handler/message/types/location.handler'
import { StickerHandler } from './line-handler/message/types/sticker.handler'
import { PostbackHandler } from './line-handler/postback/postback.handler'
import { ContactAdminContext } from './line-handler/message/types/text-context/contact-admin.context'
import { UserService } from './services/user.service'

@Module({
  providers: [
    LineHandleEvent,
    MessageHandler,
    TextHandler,
    ImageHandler,
    VideoHandler,
    AudioHandler,
    LocationHandler,
    StickerHandler,
    PostbackHandler,
    ContactAdminContext,
    UserService
  ],
  controllers: [
    LineController
  ]
})

export class LineModule {}
