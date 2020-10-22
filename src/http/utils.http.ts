import { Response } from 'express'
export function httpMessage<T>(res: Response, httpCode: number, taskCode: number, data: T, message: string = '请求成功') {
  res.status(httpCode).json({ err_code: taskCode, err_msg: message, data })
}
