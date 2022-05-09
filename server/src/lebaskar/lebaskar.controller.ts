import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LebaskarService } from "./lebaskar.service";
import { LebaskarControllerBase } from "./base/lebaskar.controller.base";

@swagger.ApiTags("lebaskars")
@common.Controller("lebaskars")
export class LebaskarController extends LebaskarControllerBase {
  constructor(
    protected readonly service: LebaskarService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
