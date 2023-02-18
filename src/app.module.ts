import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.services';
import { PrismaRocketMembersRepository } from './repositories/prisma/prisma-rocket-members-repository';
import { RocketMemberRepository } from './repositories/rocket-members-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: RocketMemberRepository,
      useClass: PrismaRocketMembersRepository,
    },
  ],
})
export class AppModule {}
