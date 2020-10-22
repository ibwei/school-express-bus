import { HttpCode, Injectable, Req, Res } from '@nestjs/common'
import { response } from 'express'

export type User = any

@Injectable()
export class UsersService {
  private readonly users: User[]

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme'
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret'
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess'
      }
    ]
  }

  getList(): string {
    return '222'
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username)
  }

  getMyName(th: number): string {
    const nameList = ['ibaiwei', 'ibaifei', 'poet']
    if (th >= nameList.length) {
      throw new RangeError('超过指定数值')
    }

    return nameList[th]
  }
}
