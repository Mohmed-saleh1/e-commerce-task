import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { VendorsModule } from './vendors/vendors.module';
import { UsersModule } from './users/users.module';
import { CartsModule } from './carts/carts.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ProductsModule,
    VendorsModule,
    UsersModule,
    CartsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
