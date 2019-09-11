import { Body, Controller, Get, Post } from '@nestjs/common';
import { CellarService } from './cellar.service';
import { Cellar } from './Cellar';

export interface DTO { //Data Transfer Object
  name:string;
}

@Controller('cellars')
export class CellarController {
  constructor(private readonly cellarService: CellarService) {
  }

  @Get()
  getCellars(): Cellar[] {
    return this.cellarService.getCellars();
  }

  @Post()
  createCellar(@Body() body: DTO): void {
    this.cellarService.createCellar(body.name);
  }
}
