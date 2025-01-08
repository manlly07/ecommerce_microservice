import { Module } from '@nestjs/common';
import { NotifyController } from './notify.controller';
import { NotifyService } from './notify.service';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [

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

  ],
  controllers: [NotifyController],
  providers: [NotifyService],
})
export class NotifyModule {}
