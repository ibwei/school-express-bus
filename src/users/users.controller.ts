import { Controller, Get, HttpCode, Req, Res, HttpException, UseGuards, Request, Post, Param } from '@nestjs/common'
import { UsersService } from './users.service'
import { Response } from 'express'
import { LocalAuthGuard } from '../auth/local-auth.guard'
import { AuthService } from 'src/auth/auth.service'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Req() req: Request, @Res() res: Response) {
    const userList = await this.usersService.findAll()
    return res.status(200).send({ list: userList })
  }

  @Get('guest')
  @HttpCode(200)
  findGuestList(): string {
    return 'This action returns guest list'
  }

  @Get('/order/list/:id')
  getList(@Param() { id }) {
    return this.usersService.findOrderListById(id)
  }
}
