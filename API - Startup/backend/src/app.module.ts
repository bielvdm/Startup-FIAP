import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailModule } from './mail/mail.module';
import { ScheduleModule } from '@nestjs/schedule';
import { DatabaseModule } from './database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionModule } from './questions/user.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MailService } from './mail/mail.service';

@Module({
  imports: [
    MailModule,
    QuestionModule,
    ScheduleModule.forRoot(),
    CacheModule.register(),
    MongooseModule.forRoot('mongodb://rm92232:bP6D1ikPTXi6Gsb8oQDIwtOuZNy5g9OHaGpaHdkszwC1vGN3ejA8s2CCTQWATBFM2qSYcckKwIer0wv1qveRWA==@rm92232.mongo.cosmos.azure.com:10255/User?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@rm92232@'),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],

  controllers: [AppController],
  providers: [AppService],
  exports: [AppService]
})
export class AppModule { }
