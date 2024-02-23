import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import {
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { GetAuthorsBooksRequestDto } from './dto/get-authorsBooks-request.dto';
import { GetAuthorsBocoksResponseDto } from './dto/get-authorsBooks-response.dto';
import { GetAuthorByIdRequestDto } from './dto/get-authorById-request.dto copy';
import { GetAuthorByIdResponsetDto } from './dto/get-authorById-response.dto';
import { UpdateAuthorRequsetDto } from './dto/update-author-request.dto';
import { DeleteAuthorRequestDto } from './dto/delete-author-request.dto';
@ApiTags('authors')
@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Post()
  @ApiOperation({ summary: 'ساخت کتاب جدید' })
  @ApiOkResponse({
    type: [CreateAuthorDto],
    description: 'The author has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  createAuthor(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorsService.createAuthor(createAuthorDto);
  }

  @Get(':authorId/books')
  @ApiOperation({ summary: 'گرفتن لیست کتاب های نویسنده با شناسه کتاب' })
  @ApiOkResponse({
    type: GetAuthorsBocoksResponseDto,
    description: 'The books has been successfully returned.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getBooksByAuthorId(@Param() payload: GetAuthorsBooksRequestDto) {
    return this.authorsService.getBooksByAuthorId(payload.authorId);
  }

  @Get()
  @ApiOperation({ summary: 'گرفتن لیست نویسنده ها' })
  @ApiOkResponse({
    type: [CreateAuthorDto],
    description: 'لیست نویسنده ها با موفقیت دریافت  شد',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  getAuthors() {
    return this.authorsService.getAuthors();
  }

  @Get(':authorId')
  @ApiOperation({ summary: 'گرفتن نویسنده از طریق شناسه' })
  @ApiOkResponse({
    type: [GetAuthorByIdResponsetDto],
    description: 'نویسنده با موفقیت برگشت داده شد',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  getMyAuthor(@Param() payload: GetAuthorByIdRequestDto) {
    return this.authorsService.getMyAuthor(payload.authorId);
  }

  @Put(':authorId')
  @ApiOperation({ summary: 'بروزرسانی نویسنده با شناسه' })
  @ApiOkResponse({
    type: UpdateAuthorDto,
    description: 'نویسنده با موفقیت بروزرسانی شد',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  updateAuthor(
    @Param() payload: UpdateAuthorRequsetDto,
    @Body() updateAuthorDto: UpdateAuthorDto,
  ) {
    return this.authorsService.updateAuthor(payload.authorId, updateAuthorDto);
  }

  @Delete(':authorId')
  @ApiOperation({ summary: 'حذف کتاب با شناسه' })
  @ApiResponse({
    status: 200,
    description: 'حذف کتاب  با موفقیت انجام شد',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  removeAuthor(@Param() payload: DeleteAuthorRequestDto) {
    return this.authorsService.removeAuthor(payload.authorId);
  }
}
