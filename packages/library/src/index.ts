import * as dotenv from 'dotenv';
dotenv.config();

export * from '@prisma/client';
export * from './concepts';
export * from './functions/utils';
export * from './layers';
export * from './prisma';

export function Library() {
  return 'NPM Library';
}
