interface EventPayload {
  type: string
  replyToken: string
  source: {
    userId: string
    type: string
  }
  timestamp: string
}

interface ContentProvider {
  type: string,
  originalContentUrl?: string
  previewImageUrl?: string
}

export interface MessageEventPayload extends EventPayload {
  message: {
    id: string
    type: string
    text?: string
    contentProvider?: ContentProvider
    duration?: number
    title?: string
    address?: string
    latitude?: number
    longitude?: number
    fileName?: string
    fileSize?: string
    packageId?: string
    stickerId?: string
  }
}

export interface PostbackEventPayload extends EventPayload {
  postback: {
    data: string
    params?: {
      date?: string
      time?: string
      datetime?: string
    }
  }
}
