import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { Body, Body2, Body3, Body4, Body5 } from './body/body.entity';

@Injectable()
export class MailService {
    constructor(private mailerService: MailerService) { }

}
