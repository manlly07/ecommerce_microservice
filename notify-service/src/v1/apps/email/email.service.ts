import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { BaseEmail } from './email.dto';
import TemplateEmail from 'src/v1/common/templates';
import { replacePlaceHolder } from 'src/v1/common/utils';

@Injectable()
export class EmailService {
    constructor(
        private _mailerService: MailerService
    ) {}

    async sendEmailBase({ toEmail, subject, text, template } : BaseEmail) {
        const mailOptions = {
            from: ' "Shop" <dvc.290603@gmail.com> ',
            to: toEmail,
            subject,
            text,
            html: template,
        }
        this._mailerService.sendMail(mailOptions)
        .then(() => {
            console.log('Email sent to: ' + toEmail);
        })
        .catch((error) => {
            console.log('Error sending email: ' + error);
        });
    }

    async sendEmailToken(payload: any) {
        const { email, token } = payload;
        const template = TemplateEmail.htmlEmailToken();

        const content = replacePlaceHolder(template, {
            link_verify: `http://localhost:3000/users/verify?token=${token}`,
        });
    
        this.sendEmailBase({
            toEmail: email,
            subject: 'Vui lòng xác nhận địa chỉ email đăng ký Shopping!',
            text: 'Xác nhận email',
            template: content,
        })

        return true;
    }

    async sendEmailPassword(payload: any) {
        const { email, password } = payload;

        const template = TemplateEmail.htmlEmailPassword();

        const content = replacePlaceHolder(template, {
            my_password: password,
        });

        this.sendEmailBase({
            toEmail: email,
            subject: 'Mật khẩu tài khoản Shopping!',
            text: 'Mật khẩu tài khoản',
            template: content,
        })

        return true;
    }
}
