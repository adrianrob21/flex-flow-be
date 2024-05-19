import { Controller, Head, Param, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDetails } from "./user-details.interface";

import { Get, Headers } from "@nestjs/common";
import { JwtGuard } from "src/auth/guards/jwt.guard";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtGuard)
  @Get()
  getUser(@Headers() headers: Record<string, string>): Promise<UserDetails> {
    const uid = headers["uid"];
    return this.userService.findById(uid);
  }
}
