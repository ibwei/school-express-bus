import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Order } from '../order/order.entity'
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string

  @Column()
  password: string

  @Column()
  email: string

  @Column({ default: 0 })
  rank: number
}
