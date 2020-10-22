import { MiddlewareConsumer, Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { LoggerMiddleware } from './middleware/logger.middleware'
import { UsersModule } from './users/users.module'
import { TimeoutInterceptor } from './interceptor/timeout.interceptor'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthModule } from './auth/auth.module'
import { DatabaseConfig } from './config/env.config'
import { Connection } from 'typeorm'

@Module({
  imports: [UsersModule, AuthModule, TypeOrmModule.forRoot(DatabaseConfig)],
  controllers: [AppController],
  providers: [AppService, { provide: APP_INTERCEPTOR, useClass: TimeoutInterceptor }]
})
export class AppModule {
  constructor(private connection: Connection) {}
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('') /* .apply(TestMiddleware).forRoutes('') */
  }
}
