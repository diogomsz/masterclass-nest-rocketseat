/* eslint-disable prettier/prettier */
export abstract class RocketMemberRepository {
  abstract create(name: string, memberFunction: string): Promise<void>;
  abstract readAll(): Promise<any>;
}
