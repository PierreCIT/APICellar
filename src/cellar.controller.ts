import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CellarService } from './cellar.service';
import { Cellar, Bottle } from './Cellar';

interface cellarDTO { //Data Transfer Object
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
  createCellar(@Body() cellarDto: cellarDTO) {
    return this.cellarService.createCellar(cellarDto);
  }

  @Get(':id')
  getCellarId(@Param('id') id: string): Cellar {
    return this.cellarService.getCellarId(id);
  }

  @Post(':id/bottles')
  addBottle(@Body() bottleDto:Bottle, @Param('id')id:string) {
    return this.cellarService.addBottle(bottleDto, id);
  }

  @Get(':id/bottles')
  getBottlesCellar(@Param('id')id:string):Bottle[]{
    return this.getCellarId(id).bottles;
  }


}
