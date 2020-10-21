import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response } from 'express'

@Injectable()
export class TestMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log('start')
    next()
    console.log('end')
  }
}
