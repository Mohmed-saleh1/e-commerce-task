import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { VendorsModule } from './vendors/vendors.module';
import { UsersModule } from './users/users.module';
import { CartsModule } from './carts/carts.module';
import { AuthModule } from './auth/auth.module';
import { SubCategoriesModule } from './subCategories/subCategories.module';
import { CategoriesModule } from './categories/category.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/e-commerce'),
    ProductsModule,
    VendorsModule,
    UsersModule,
    CartsModule,
    AuthModule,
    SubCategoriesModule,
    CategoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
