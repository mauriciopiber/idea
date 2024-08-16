import * as dotenv from 'dotenv';
dotenv.config();

export * from '@prisma/client';
export * from './functions/utils';

export function Library() {
  return 'NPM Library';
}
