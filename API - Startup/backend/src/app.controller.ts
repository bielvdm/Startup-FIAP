import { Controller, Get, Post, Req, Request, Inject, UseInterceptors, UploadedFile, CACHE_MANAGER, Body } from '@nestjs/common';
import { AppService } from './app.service';
import axios from 'axios';
import { Cache } from 'cache-manager';
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, SchedulerRegistry } from '@nestjs/schedule';
import { FileInterceptor } from '@nestjs/platform-express';
import { QuestionController } from './questions/user.controller';

@Controller()
export class AppController {
  

}


