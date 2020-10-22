import { Injectable } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { JwtService } from '@nestjs/jwt'
import { User } from '../interfaces/user.interface'

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByUserName(username)
    if (user && user.password === password) {
      const { password, ...result } = user
      return result
    }
    return null
  }

  async login(user: User) {
    if (typeof user === 'string') {
      if (user === 'faild') {
        return { err_code: 1, err_msg: '账号密码错误' }
      }
    }
    const payload = { username: user.username, id: user.id }
    return {
      access_token: this.jwtService.sign(payload),
      ...user
    }
  }
}
