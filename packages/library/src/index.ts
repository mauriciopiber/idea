import * as dotenv from 'dotenv';
dotenv.config();

export * from '@prisma/client';
export * from './functions/utils';
export * from './prisma/prisma.module';
export * from './prisma/prisma.service';

export function Library() {
  return 'NPM Library';
}
