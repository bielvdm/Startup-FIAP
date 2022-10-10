import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { Body, Body2, Body3, Body4, Body5 } from './body/body.entity';

@Injectable()
export class MailService {
    constructor(private mailerService: MailerService) { }

    // async sendConfirmation(body: Body) {

    //     let items = []

    //     let media = (body.media).toFixed(1)

    //     body.items.map(value => {
    //         items.push(
    //             value
    //         )
    //     })

    //     await this.mailerService.sendMail({
    //         to: body.email,
    //         subject: `The average was ${media}`,
    //         template: './confirmation',
    //         context: {
    //             media: media,
    //             items: items,
    //             category: body.category,
    //             site: body.site
    //         },
    //     });
    // }

    async sendConfirmation2(body: Body2) {

        await this.mailerService.sendMail({
            to: body.email,
            subject: `QBR Process`,
            template: './confirmation4',
            context: {
                name: body.name,
                area: body.area,
                site: body.site,
                vpname: body.vpname
            },
        });
    }

    async sendConfirmation5(body: Body5) {

        await this.mailerService.sendMail({
            to: body.email,
            subject: `Validate Plan Action`,
            template: './confirmation5',
            context: {
                area: body.area,
                site: body.site
            },
        });
    }

    async sendConfirmation3(body: Body3) {

        await this.mailerService.sendMail({
            to: body.email,
            subject: `QBR Process`,
            template: './confirmation3',
            context: {
                name: body.name,
                site: body.site
            },
        });
    }

    async sendConfirmation4(body: Body4) {


        await this.mailerService.sendMail({
            to: body.email,
            subject: `QBR Process`,
            template: './confirmation2',
            context: {
                site: body.site,
                spec: body.spec,
                area: body.area
            },
        });
    }
}
