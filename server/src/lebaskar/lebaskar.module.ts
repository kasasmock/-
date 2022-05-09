import { Module } from "@nestjs/common";
import { LebaskarModuleBase } from "./base/lebaskar.module.base";
import { LebaskarService } from "./lebaskar.service";
import { LebaskarController } from "./lebaskar.controller";
import { LebaskarResolver } from "./lebaskar.resolver";

@Module({
  imports: [LebaskarModuleBase],
  controllers: [LebaskarController],
  providers: [LebaskarService, LebaskarResolver],
  exports: [LebaskarService],
})
export class LebaskarModule {}
