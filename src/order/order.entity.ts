import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  orderId: number

  @Column()
  orderStatus: number

  @Column()
  orderNum: number

  @Column()
  orderTotalMoney: number

  @Column()
  user_id: number
}
