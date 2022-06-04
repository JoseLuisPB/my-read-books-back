/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dbUsername, dbPassword, dbName } from './sensible.data';
import { BookModule } from './modules/book/book.module';
import { AuthorModule } from './modules/author/author.module';
import { StatisticsModule } from './modules/statistics/statistics.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: dbUsername,
    password: dbPassword,
    database: dbName,
    entities: [ "dist/**/*.entity{.ts,.js}"],
    synchronize: false
  }), BookModule, AuthorModule, StatisticsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
