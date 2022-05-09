import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { LebaskarServiceBase } from "./base/lebaskar.service.base";

@Injectable()
export class LebaskarService extends LebaskarServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
