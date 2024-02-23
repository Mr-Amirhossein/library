import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class AuthorsService {
  constructor(private readonly prisma: PrismaService) {}
  async createAuthor(createAuthorDto: CreateAuthorDto) {
    const { firstName, lastName } = createAuthorDto;
    await this.prisma.author.create({
      data: {
        firstName,
        lastName,
      },
    });
    return 'create author was successful';
  }

  async getAuthors() {
    return await this.prisma.author.findMany({
      select: { firstName: true, lastName: true, id: true },
    });
  }

  async getBooksByAuthorId(id: string) {
    const author = await this.prisma.author.findUnique({
      where: { id },
      select: {
        books: {
          select: {
            title: true,
            id: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    });

    if (!author) {
      throw new ForbiddenException('Author not found');
    }

    return { books: author.books };
  }

  async getMyAuthor(authorId: string) {
    const user = await this.prisma.author.findUnique({
      where: { id: authorId },
      select: {
        firstName: true,
        lastName: true,
      },
    });

    if (!user) {
      throw new ForbiddenException('Author not found');
    }

    return {
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
      },
    };
  }

  async updateAuthor(authorId: string, updateAuthorDto: UpdateAuthorDto) {
    const { firstName, lastName } = updateAuthorDto;

    const author = await this.prisma.author.findUnique({
      where: { id: authorId },
    });

    if (!author) {
      throw new ForbiddenException('Author not found');
    }

    await this.prisma.author.update({
      where: { id: authorId },
      data: {
        firstName,
        lastName,
      },
    });

    return 'update author was successful';
  }

  async removeAuthor(authorId: string) {
    const Author = await this.prisma.author.findUnique({
      where: { id: authorId },
    });

    if (!Author) {
      throw new ForbiddenException('Author not found');
    }

    // Delete author
    await this.prisma.author.delete({
      where: { id: authorId },
    });

    return `Author with id #${authorId} has been deleted`;
  }
}
