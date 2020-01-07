export class SignatureValidationFailed extends Error {
  constructor(message: string, public signature?: string) {
    super(message)
  }
}

export class JSONParseError extends Error {
  constructor(message: string, public raw: any) {
    super(message)
  }
}
