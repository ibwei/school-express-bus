import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Query, Req } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
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
  @Post('login')
  login(@Body() body, @Query() params: { username: string; password: string }, @Req() request) {
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
      }, 3000)
    })
    return x
  }
}
