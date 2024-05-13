import { Injectable } from "@nestjs/common";
import { UserService } from "src/user/user.service";

import * as bycript from "bcrypt";
import { NewUserDTO } from "src/user/dtos/new-user.dto";
import { UserDetails } from "src/user/user-details.interface";
import { ExistingUserDTO } from "src/user/dtos/existing-user.dto";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async hasPassword(password: string): Promise<string> {
    return bycript.hash(password, 12);
  }

  async doesThePasswordMatch(
    password: string,
    hashedPassword: string
  ): Promise<boolean> {
    return bycript.compare(password, hashedPassword);
  }

  async validateUser(email: string, password: string): Promise<UserDetails> {
    const user = await this.userService.findByEmail(email);
    const doesUserExist = !!user;

    if (!doesUserExist) return null;

    const doesThePasswordMatch = await this.doesThePasswordMatch(
      password,
      user.password
    );

    if (!doesThePasswordMatch) return null;

    return this.userService._getUserDetails(user);
  }

  async login(
    existingUser: ExistingUserDTO
  ): Promise<{ token: string } | null> {
    const { email, password } = existingUser;

    const user = await this.validateUser(email, password);

    if (!user) return null;

    const jwt = await this.jwtService.signAsync({ user });

    return { token: jwt };
  }

  async register(user: Readonly<NewUserDTO>): Promise<UserDetails | any> {
    const { fullName, email, password } = user;

    const existingUser = await this.userService.findByEmail(email);

    if (existingUser) return "Email already taken";

    const hashedPassword = await this.hasPassword(password);

    const newUser = await this.userService.createUser(
      fullName,
      email,
      hashedPassword
    );

    return this.userService._getUserDetails(newUser);
  }
}
