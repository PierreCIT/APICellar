import { Controller, Get, Post } from '@nestjs/common';
import { CellarService } from './cellar.service';

@Controller('cellar')
export class CellarController {
  constructor(private readonly appService: CellarService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
