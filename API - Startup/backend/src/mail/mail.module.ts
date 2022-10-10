import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter'
import { MailerModule } from '@nestjs-modules/mailer';
import { join } from 'path';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 465,
        pool: true,
        ignoreTLS: true,
        secure: true,
        auth: {
          user: 'scalaemailsender@gmail.com',
          pass: 'zziozpngbkwqizbo',
        },
      },
      defaults: {
        from: 'QBR Plataform" <scalatestsender@gmail.com>',
      },
      template:{
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(), //or PugAdpter or EJS adapter
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService]
})
export class MailModule {}
