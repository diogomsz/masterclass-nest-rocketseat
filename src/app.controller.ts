import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { RocketMemberRepository } from './repositories/rocket-members-repository';

@Controller('app')
export class AppController {
  constructor(private rocketMemberRepository: RocketMemberRepository) {}

  @Post('postMember')
  async getHello(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body;
    await this.rocketMemberRepository.create(name, memberFunction);
  }

  @Get('getAllMembers')
  async getAllMembers() {
    const res = await this.rocketMemberRepository.readAll();
    return res;
  }
}
