import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ManagerModule } from './manager/manager.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ManagerModule,
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PSWD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    })
  ],

})
export class AppModule {}
