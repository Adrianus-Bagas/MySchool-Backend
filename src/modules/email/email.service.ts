// mail.service.ts
import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
  constructor(private mailerService: MailerService) {}

  async sendVerificationEmail(to: string, password: string) {
    await this.mailerService.sendMail({
      to,
      subject: 'Verify your account',
      html: `
        <h3>Welcome to MySchool App!</h3>
        <h5>Your school performance tracking tool</h5>
        <p>This is your account for MySchool App. Please do not share this to anyone!</p>
        <p>Email: ${to}</p>
        <p>Password: ${password}</p>
      `,
    });
  }
}
