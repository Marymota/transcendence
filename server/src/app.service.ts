
/* Welcome message in the Home screen set up as a NestJS service using the '@Injectable' decorator */

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getWelcomeMsg() {
    return { msg: 'PONG' };
  }
}
