// src/prisma/prisma.service.ts

import { PrismaClient } from '@ideas/library';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaService extends PrismaClient {}
