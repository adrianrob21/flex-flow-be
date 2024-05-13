import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { NewUserDTO } from "src/user/dtos/new-user.dto";

import { UserDetails } from "src/user/user-details.interface";
import { ExistingUserDTO } from "src/user/dtos/existing-user.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("register")
  register(@Body() user: NewUserDTO): Promise<UserDetails> {
    return this.authService.register(user);
  }

  @Post("login")
  @HttpCode(HttpStatus.OK)
  login(@Body() user: ExistingUserDTO): Promise<{ token: string }> {
    return this.authService.login(user);
  }
}
