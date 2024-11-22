import { Controller } from '@nestjs/common';
import { EmailService } from './email.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('email')
export class EmailController {
    constructor(
        private _emailService: EmailService
    ) {}

    // @MessagePattern('send_email_token')
    @MessagePattern('send_email_token')
    async sendEmailToken(payload: any) {
        console.log(payload);
        return await this._emailService.sendEmailToken(payload.data);
    }

    // @MessagePattern('send_email_password')
    @MessagePattern('send_email_password')
    async sendEmailPassword(payload: any) {
        console.log(payload);
        return await this._emailService.sendEmailPassword(payload.data);
    }
}
