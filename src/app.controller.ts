import { applyDecorators, Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Query, Req, UseGuards, UseInterceptors, Request } from '@nestjs/common'
import { OnModuleInit } from '@nestjs/common/interfaces'
import { AuthGuard } from '@nestjs/passport'
import { AppService } from './app.service'
import { LocalAuthGuard } from './auth/local-auth.guard'
import { AuthService } from './auth/auth.service'
import { JwtAuthGuard } from './auth/jwt-auth.guard'

const GlobalDecorator = () => {
  return applyDecorators(Controller(), UseInterceptors())
}
@GlobalDecorator()
export class AppController implements OnModuleInit {
  constructor(private readonly appService: AppService, private authService: AuthService) {}
  onModuleInit() {
    console.log('App controller not implemented.')
  }

  @UseGuards(LocalAuthGuard)
  @Post('/users/auth/login')
  async login(@Request() res) {
    //console.log('-------', res.user)
    return this.authService.login(res.user)
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user
  }

  @Get()
  getHello(): string {
    return 'hahahah'
  }

  // query 的形式
  @Get('getName')
  getName(@Query() { id, name }): string {
    console.log(id, name)
    id = id ? id : 0
    return this.appService.getMyName(id)
  }

  // param 的形式
  @Get('kk/:id')
  getUserById(@Param('id') id) {
    console.log(`id=${id}`)
    return this.appService.getMyName(id)
  }

  // post的 body 可以结合 param
  @Post('login-test')
  login111(@Body() body, @Query() params: { username: string; password: string }, @Req() request) {
    console.log(body)
    console.log(params)
    console.log(request)
    // console.log(username, password)
    throw new HttpException(
      {
        status: HttpStatus.UNAUTHORIZED,
        error: '没授权'
      },
      HttpStatus.UNAUTHORIZED
    )
  }
  // post的 body 可以结合 param
  @Post('logout/:id')
  loginout(@Param('id') id: number) {
    console.log(id)
    return `id=${id}的账号已经退出`
  }
  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    console.log(id)
    return `id=${id}的账号已经删除`
  }

  @Get('asyncTest')
  async findAll(): Promise<any> {
    let x = 0
    x = await new Promise((resolve, reject) => {
      setTimeout(() => {
        x = x + 1
        resolve(x)
      }, 6000)
    })
    return x
  }
}
