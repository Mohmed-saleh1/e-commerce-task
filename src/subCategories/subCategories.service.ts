import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SubCategory, SubCategoryDocument } from './subCategory.entity';
import { CreateSubCategoryDto } from './Dtos/create-subCategory.dto';
import { UpdateSubCategoryDto } from './Dtos/update-subCategory.dto';

@Injectable()
export class SubCategoriesService {
  constructor(
    @InjectModel(SubCategory.name)
    private subCategoryModel: Model<SubCategoryDocument>,
  ) {}

  // Create a new SubCategory
  async create(
    createSubCategoryDto: CreateSubCategoryDto,
  ): Promise<SubCategory> {
    const subCategory = new this.subCategoryModel(createSubCategoryDto);
    return subCategory.save();
  }

  // Find all SubCategories
  async findAll(): Promise<SubCategory[]> {
    return this.subCategoryModel.find().populate('parentCategory').exec();
  }

  // Find a single SubCategory by its ID
  async findOne(id: string): Promise<SubCategory> {
    const subCategory = await this.subCategoryModel
      .findById(id)
      .populate('parentCategory')
      .exec();
    if (!subCategory) {
      throw new NotFoundException(`SubCategory #${id} not found`);
    }
    return subCategory;
  }

  // Update an existing SubCategory
  async update(
    id: string,
    updateSubCategoryDto: UpdateSubCategoryDto,
  ): Promise<SubCategory> {
    const existingSubCategory = await this.subCategoryModel
      .findByIdAndUpdate(id, updateSubCategoryDto, { new: true })
      .populate('parentCategory')
      .exec();
    if (!existingSubCategory) {
      throw new NotFoundException(`SubCategory #${id} not found`);
    }
    return existingSubCategory;
  }

  // Delete a SubCategory
  async delete(id: string): Promise<SubCategory> {
    const subCategory = await this.subCategoryModel
      .findByIdAndDelete(id)
      .exec();
    if (!subCategory) {
      throw new NotFoundException(`SubCategory #${id} not found`);
    }
    return subCategory;
  }
}
