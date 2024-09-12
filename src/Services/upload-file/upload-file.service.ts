import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { Express } from 'express';

@Injectable()
export class UploadFileService {
    private readonly filePath = "C:\\Users\\sg925758.ttl\\Workspace\\Projects\\ChartJs\\src\\assets\\images\\";
    private readonly uploadPath = path.join(this.filePath, '', 'uploads'); // Specify your path

    constructor() {
        // Create the upload directory if it doesn't exist
        if (!fs.existsSync(this.uploadPath)) {
          fs.mkdirSync(this.uploadPath, { recursive: true });
        }
      }
      async saveFile(file: Express.Multer.File): Promise<string> {
        debugger;
        console.log(this.uploadPath)
        const filePath = path.join(this.uploadPath, file.originalname);
        fs.writeFileSync(filePath, file.buffer);
        return filePath;
      }
}
