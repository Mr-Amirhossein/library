import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WalletModule } from './wallets/wallet.module';
import { PrismaModule } from 'nestjs-prisma';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    PrismaModule.forRoot({
      isGlobal: true,
    }),
    WalletModule,
    AuthorsModule,
    BooksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
