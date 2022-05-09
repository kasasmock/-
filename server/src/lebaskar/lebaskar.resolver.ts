import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { LebaskarResolverBase } from "./base/lebaskar.resolver.base";
import { Lebaskar } from "./base/Lebaskar";
import { LebaskarService } from "./lebaskar.service";

@graphql.Resolver(() => Lebaskar)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class LebaskarResolver extends LebaskarResolverBase {
  constructor(
    protected readonly service: LebaskarService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
