import { Injectable } from '@nestjs/common';
import TemplateEmail from './template';
import { replacePlaceHolder } from 'y/utils';
import { LoginResponseDto, SendMailDto } from 'y/dtos';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class NotifyService {
  constructor(private _mailerService: MailerService) {}

  async sendEmailBase({ toEmail, subject, text, template }: SendMailDto) {
    const mailOptions = {
      from: ' "Shop" <dvc.290603@gmail.com> ',
      to: toEmail,
      subject,
      text,
      html: template,
    };
    this._mailerService
      .sendMail(mailOptions)
      .then(() => {
        console.log('Email sent to: ' + toEmail);
      })
      .catch((error) => {
        console.log('Error sending email: ' + error);
      });
  }

  async sendEmailToken(payload: LoginResponseDto) {
    const { user_email, token } = payload;
    const template = TemplateEmail.htmlEmailToken();

    const content = replacePlaceHolder(template, {
      link_verify: `${process.env.HOST}:${process.env.GATEWAY_PORT}/users/verify?token=${token}`,
    });

    this.sendEmailBase({
      toEmail: user_email,
      subject: 'Vui lòng xác nhận địa chỉ email đăng ký Shopping!',
      text: 'Xác nhận email',
      template: content,
    });

    return "Vui lòng xác nhận địa chỉ email đăng ký Shopping!";
  }
}
