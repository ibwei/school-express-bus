import { Controller, Get, HttpCode, Req, Res, HttpException } from '@nestjs/common'
import { UsersService } from './users.service'
import { Request, Response } from 'express'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
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
