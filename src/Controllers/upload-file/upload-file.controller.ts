import { BadRequestException, Controller, HttpException, HttpStatus, Post, UploadedFile, UseFilters, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadFileService } from 'src/Services/upload-file/upload-file.service';
import * as multer from 'multer';
import { ResponseInterceptor } from 'src/Interceptor/response.interceptor';
import { ExceptionInterceptor } from 'src/Interceptor/exception.interceptor';
import { CustomHttpExceptionFilter } from 'src/Interceptor/custom-http-exception-filter';

@Controller('upload-file')
@UseInterceptors(ResponseInterceptor)
@UseInterceptors(ExceptionInterceptor)
@UseFilters(CustomHttpExceptionFilter)
export class UploadFileController {

    constructor(private readonly fileService: UploadFileService) {}

  @Post('upload')
  
  // @Unprotected()
  @UseInterceptors(FileInterceptor('file', {
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
    fileFilter: (req, file, callback) => {
      if (!file.mimetype.startsWith('image/')) {
        return callback(new HttpException('Only image files are allowed!',HttpStatus.BAD_REQUEST), false);
      }
      callback(null, true);
    },
  }))
  async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<string> {
    const filePath = await this.fileService.saveFile(file);
    return `File uploaded successfully to ${filePath}`;
  }
}
