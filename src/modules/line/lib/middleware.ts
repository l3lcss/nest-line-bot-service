import { raw } from 'body-parser'
import { JSONParseError, SignatureValidationFailed } from './exceptions'
import validateSignature from './validate-signature'

interface MiddlewareConfig {
  channelSecret: string
}

function isValidBody(body?: any): body is string | Buffer {
  return (body && typeof body === 'string') || Buffer.isBuffer(body)
}

export default function middleware({ channelSecret }: MiddlewareConfig): any {
  if (!channelSecret) {
    throw new Error('no channel secret')
  }

  return async (req, res, next) => {
    console.log(`\n\n`)
    console.log(`\x1b[45m \x1b[0m\x1b[44m  \x1b[0m\x1b[46mRE\x1b[0m\x1b[42mQU\x1b[0m\x1b[43mES\x1b[0m\x1b[41mT  \x1b[0m\x1b[33m  ==>  \x1b[34m[${req.method}]\x1b[0m \x1b[0m\x1b[0m\x1b[35m${req.headers.host}${req.originalUrl}  \x1b[0m`)
    console.log(' ')
    const signature = req.headers['x-line-signature'] as string

    if (!signature) {
      next()

      return
    }

    const body = await (async (): Promise<string | Buffer> => {
      if (isValidBody((req as any).rawBody)) {
        return (req as any).rawBody
      } else if (isValidBody(req.body)) {
        return req.body
      } else {
        return new Promise<Buffer>(resolve =>
          raw({ type: '*/*' })(req as any, res as any, () => resolve(req.body))
        )
      }
    })()

    if (!validateSignature(body, channelSecret, signature)) {
      next(
        new SignatureValidationFailed('signature validation failed', signature)
      )

      return
    }

    const strBody = Buffer.isBuffer(body) ? body.toString() : body

    try {
      req.body = JSON.parse(strBody)
      next()
    } catch (err) {
      next(new JSONParseError(err.message, strBody))
    }
  }
}
