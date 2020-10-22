import { Controller, Get, HttpCode, Req, Res, HttpException, UseGuards, Request, Post } from '@nestjs/common'
import { UsersService } from './users.service'
import { Response } from 'express'
import { LocalAuthGuard } from '../auth/local-auth.guard'
import { AuthService } from 'src/auth/auth.service'

@Controller('users')
export class UsersController {
  constructor() {}

  @Get()
  @HttpCode(200)
  findAll(@Req() req: Request, @Res() res: Response) {
    return res.status(200).send({ name: 'hahah' })
  }

  @Get('guest')
  @HttpCode(200)
  findGuestList(): string {
    return 'This action returns guest list'
  }
}
