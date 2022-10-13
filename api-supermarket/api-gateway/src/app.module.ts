import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { ManagerModule } from './manager/manager.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
    AdminModule,
    ManagerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
