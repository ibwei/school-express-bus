import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!'
  }
  getMyName(th: number): string {
    const nameList = ['ibaiwei', 'ibaifei', 'poet']
    if (th >= nameList.length) {
      throw new RangeError('超过指定数值')
    }

    return nameList[th]
  }
}
