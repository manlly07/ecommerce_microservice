import { Module } from '@nestjs/common';
import { EmailModule } from './apps/email/email.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MailerModule } from '@nestjs-modules/mailer';
import * as dotenv from "dotenv";

dotenv.config();
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NOTIFICATION_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.QUEUE_URL],
          queue: 'auth_queue',
          queueOptions: { durable: true },
        },
      },
    ]),

    MailerModule.forRoot({
      transport: {
        host: String(process.env.MAIL_HOST),
        port: Number(process.env.MAIL_PORT),
        secure: false,
        service: 'Gmail',
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      },
    }),

    EmailModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
