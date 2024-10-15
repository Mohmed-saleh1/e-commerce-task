import { IsNotEmpty, IsString, IsMongoId, IsArray } from 'class-validator';
import { Types } from 'mongoose';

export class CreateSubCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsMongoId()
  @IsNotEmpty()
  parentCategory: string;

  @IsArray()
  products?: Types.ObjectId[];
}
