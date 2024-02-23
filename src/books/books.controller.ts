import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import {
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { GetBookByIdRequestDto } from './dto/get-bookById-request.dto';
import { GetBookByIdResponseDto } from './dto/get-bookById-response.dto';
@ApiTags('books')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @ApiOperation({ summary: 'ساخت کتاب ' })
  @ApiOkResponse({
    description: 'ساخت کتاب با موفقیت انجام شد',
    type: CreateBookDto,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  @ApiOperation({ summary: 'گرفتن لیست تمام کتاب ها' })
  @ApiOkResponse({
    description: 'لیست کتاب ها',
    type: [CreateBookDto],
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  getAllBooks() {
    return this.booksService.getAllBooks();
  }

  @Get(':bookId')
  @ApiOperation({ summary: 'گرفتن کتاب با شناسه' })
  @ApiOkResponse({
    description: 'کتاب با شناسه',
    type: GetBookByIdResponseDto,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  getBookById(@Param() payload: GetBookByIdRequestDto) {
    return this.booksService.getBookById(payload.bookId);
  }

  @Put(':bookId')
  @ApiOperation({ summary: 'بروزرسانی کتاب با شناسه' })
  @ApiOkResponse({
    description: 'کتاب با شناسه',
    type: UpdateBookDto,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  update(
    @Param() palpoad: GetBookByIdRequestDto,
    @Body() updateBookDto: UpdateBookDto,
  ) {
    return this.booksService.updateBook(palpoad.bookId, updateBookDto);
  }

  @Delete(':bookId')
  @ApiOperation({ summary: 'حذف کتاب با شناسه' })
  @ApiResponse({
    status: 200,
    description: 'کتاب با شناسه با موفقیت حذف شد',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  remove(@Param() payload: GetBookByIdRequestDto) {
    return this.booksService.remove(payload.bookId);
  }
}
