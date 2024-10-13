import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { VendorsService } from './vendors.service';

@Controller('vendors')
export class VendorsController {
  constructor(private vendorsService: VendorsService) {}

  @Post()
  async create(@Body() createVendorDto: any) {
    return this.vendorsService.create(createVendorDto);
  }

  @Get()
  async findAll() {
    return this.vendorsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.vendorsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateVendorDto: any) {
    return this.vendorsService.update(id, updateVendorDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.vendorsService.delete(id);
  }
}
