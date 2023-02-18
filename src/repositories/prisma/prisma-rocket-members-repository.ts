/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { RocketTeamMember } from '@prisma/client';
import { randomUUID } from 'node:crypto';
import { PrismaService } from 'src/database/prisma.services';
import { RocketMemberRepository } from '../rocket-members-repository';

@Injectable()
export class PrismaRocketMembersRepository implements RocketMemberRepository {
  constructor(private prisma: PrismaService) {}
  async readAll(): Promise<RocketTeamMember[]> {
    const response = await this.prisma.rocketTeamMember.findMany();
    return response;
  }

  async create(name: string, memberFunction: string): Promise<void> {
    await this.prisma.rocketTeamMember.create({
      data: {
        id: randomUUID(),
        name,
        function: memberFunction,
      },
    });
  }
}
