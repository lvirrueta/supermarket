import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AdminModule } from './modules/ms-admin/admin.module';
import { ManagerModule } from './modules/ms-manager/manager.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
    AdminModule,
    ManagerModule
  ],
})
export class AppModule {}
