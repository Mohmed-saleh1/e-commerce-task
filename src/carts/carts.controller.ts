import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CartsService } from './carts.service';

@Controller('carts')
export class CartsController {
  constructor(private cartsService: CartsService) {}

  @Post()
  async create(@Body() createCartDto: any) {
    return this.cartsService.create(createCartDto);
  }

  @Get()
  async findAll() {
    return this.cartsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.cartsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCartDto: any) {
    return this.cartsService.update(id, updateCartDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.cartsService.delete(id);
  }
}
