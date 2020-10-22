import { MiddlewareConsumer, Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { LoggerMiddleware } from './middleware/logger.middleware'
import { TestMiddleware } from './middleware/test.middleware'
import { UsersModule } from './users/users.module'
import { TimeoutInterceptor } from './interceptor/timeout.interceptor'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { AuthModule } from './auth/auth.module'
import { AuthService } from './auth/auth.service'

@Module({
  imports: [UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, { provide: APP_INTERCEPTOR, useClass: TimeoutInterceptor }]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('') /* .apply(TestMiddleware).forRoutes('') */
  }
}
