import { Controller, Get, HttpCode } from '@nestjs/common'

@Controller('users')
export class UsersController {
  @Get()
  findAll(): string {
    return 'This action returns all users'
  }

  @Get('guest')
  @HttpCode(200)
  findGuestList(): string {
    return 'This action returns guest list'
  }
}
