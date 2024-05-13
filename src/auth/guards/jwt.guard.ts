import { Injectable } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { AuthGuard } from "@nestjs/passport";

import * as bycript from "bcrypt";
import { NewUserDTO } from "src/user/dtos/new-user.dto";
import { UserDetails } from "src/user/user-details.interface";
import { ExistingUserDTO } from "src/user/dtos/existing-user.dto";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class JwtGuard extends AuthGuard("jwt") {}
