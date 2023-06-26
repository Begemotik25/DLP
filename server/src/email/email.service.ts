import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmailService {
  private readonly transporter;

  constructor(private readonly configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: configService.get('GMAIL_LOGIN'),
        pass: configService.get('GMAIL_PASSWORD'),
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  public async sendEmail(to: string, subject: string, text: string) {
    const mailOptions = {
      from: this.configService.get('GMAIL_LOGIN'),
      to: to,
      subject: subject,
      text: text,
    };

    this.transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error occurred:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
    return 'Email sent!';
  }
}
