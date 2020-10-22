import { HttpCode, Injectable, Req, Res } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './user.entity'

@Injectable()
export class UsersService {
  private readonly users: User[]

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find()
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id)
  }

  findOneByUserName(username: string): Promise<User> {
    return this.usersRepository.findOne({ username: username })
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id)
  }
}
