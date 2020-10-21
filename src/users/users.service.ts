import { HttpCode, Injectable, Req, Res } from '@nestjs/common'
import { response } from 'express'

@Injectable()
export class UsersService {
  getList(): string {
    return '222'
  }
  getMyName(th: number): string {
    const nameList = ['ibaiwei', 'ibaifei', 'poet']
    if (th >= nameList.length) {
      throw new RangeError('超过指定数值')
    }

    return nameList[th]
  }
}
