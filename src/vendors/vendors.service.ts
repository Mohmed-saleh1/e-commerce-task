import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vendor, VendorDocument } from './vendor.entity';

@Injectable()
export class VendorsService {
  constructor(
    @InjectModel(Vendor.name) private vendorModel: Model<VendorDocument>,
  ) {}

  async create(createVendorDto: any): Promise<Vendor> {
    const vendor = new this.vendorModel(createVendorDto);
    return vendor.save();
  }

  async findAll(): Promise<Vendor[]> {
    return this.vendorModel.find().exec();
  }

  async findOne(id: string): Promise<Vendor> {
    const vendor = await this.vendorModel.findById(id);
    if (!vendor) {
      throw new NotFoundException(`Vendor #${id} not found`);
    }
    return vendor;
  }

  async update(id: string, updateVendorDto: any): Promise<Vendor> {
    const existingVendor = await this.vendorModel.findByIdAndUpdate(
      id,
      updateVendorDto,
      {
        new: true,
      },
    );
    if (!existingVendor) {
      throw new NotFoundException(`Vendor #${id} not found`);
    }
    return existingVendor;
  }

  async delete(id: string): Promise<Vendor> {
    const vendor = await this.vendorModel.findByIdAndDelete(id);
    if (!vendor) {
      throw new NotFoundException(`Vendor #${id} not found`);
    }
    return vendor;
  }
}
