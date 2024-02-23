import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class BooksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createBookDto: CreateBookDto) {
    const { title, authorId } = createBookDto;
    await this.prisma.books.create({
      data: {
        title,
        authorId,
      },
    });
    return 'کتاب با موفقیت ساخته شد';
  }

  async getAllBooks() {
    return this.prisma.books.findMany({
      select: { title: true, authorId: true },
    });
  }

  async getBookById(bookId: string) {
    const book = await this.prisma.books.findUnique({
      where: { id: bookId },
      select: {
        title: true,
        authorId: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!book) {
      throw new ForbiddenException('Book not found');
    }

    return {
      book: {
        title: book.title,
        authorId: book.authorId,
        createAt: book.createdAt,
        updateAt: book.updatedAt,
      },
    };
  }

  async updateBook(bookId: string, updateBookDto: UpdateBookDto) {
    const { title, authorId } = updateBookDto;

    const book = await this.prisma.books.findUnique({
      where: { id: bookId },
    });

    if (!book) {
      throw new ForbiddenException('Book not found');
    }

    await this.prisma.books.update({
      where: { id: bookId },
      data: {
        title,
        authorId,
      },
    });
    return 'update book was successful';
  }

  async remove(bookId: string) {
    const book = await this.prisma.books.findUnique({
      where: { id: bookId },
    });

    if (!book) {
      throw new ForbiddenException('Book not found');
    }

    await this.prisma.books.delete({
      where: { id: bookId },
    });

    return 'delete book was successful';
  }
}
