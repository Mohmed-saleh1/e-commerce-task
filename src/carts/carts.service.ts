import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cart, CartDocument } from './schemas/cart.schema';

@Injectable()
export class CartsService {
  constructor(@InjectModel(Cart.name) private cartModel: Model<CartDocument>) {}

  async create(createCartDto: any): Promise<Cart> {
    const cart = new this.cartModel(createCartDto);
    return cart.save();
  }

  async findAll(): Promise<Cart[]> {
    return this.cartModel.find().exec();
  }

  async findOne(id: string): Promise<Cart> {
    const cart = await this.cartModel.findById(id);
    if (!cart) {
      throw new NotFoundException(`Cart #${id} not found`);
    }
    return cart;
  }

  async update(id: string, updateCartDto: any): Promise<Cart> {
    const existingCart = await this.cartModel.findByIdAndUpdate(
      id,
      updateCartDto,
      {
        new: true,
      },
    );
    if (!existingCart) {
      throw new NotFoundException(`Cart #${id} not found`);
    }
    return existingCart;
  }

  async delete(id: string): Promise<Cart> {
    const cart = await this.cartModel.findByIdAndDelete(id);
    if (!cart) {
      throw new NotFoundException(`Cart #${id} not found`);
    }
    return cart;
  }
}
