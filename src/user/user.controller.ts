import { Controller, Param, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDetails } from "./user-details.interface";

import { Get } from "@nestjs/common";
import { JwtGuard } from "src/auth/guards/jwt.guard";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtGuard)
  @Get(":id")
  getUser(@Param("id") id: string): Promise<UserDetails> {
    return this.userService.findById(id);
  }
}
