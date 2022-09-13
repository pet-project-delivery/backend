import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as uuid from 'uuid';
import * as fs from 'fs';
import * as path from 'path';

export enum FileType {
  SHOPS = 'shop',
  RESTAURANTS = 'restaurant',
  ITEMS = 'item',
}

@Injectable()
export class FileService {
  createFile(type: FileType, file): string {
    try {
      const fileExtension = file.originalname.split('.').pop();
      const fileName = `${uuid.v4()}.${fileExtension}`;
      const filePath = path.resolve(__dirname, '..', 'static', type);

      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }

      fs.writeFileSync(path.resolve(filePath, fileName), file.buffer);

      return `${type}/${fileName}`;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
