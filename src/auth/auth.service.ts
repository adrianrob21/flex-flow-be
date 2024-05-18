import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UserService } from "src/user/user.service";

import * as bycript from "bcrypt";
import { NewUserDTO } from "src/user/dtos/new-user.dto";
import { UserDetails } from "src/user/user-details.interface";
import { ExistingUserDTO } from "src/user/dtos/existing-user.dto";
import { JwtService } from "@nestjs/jwt";
import { UserDocument } from "src/user/user.schema";

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

    if (!doesThePasswordMatch) {
      throw new HttpException(
        { type: "invalidCredentials" },
        HttpStatus.UNAUTHORIZED
      );
    }

    return this.userService._getUserDetails(user);
  }

  async login(existingUser: ExistingUserDTO): Promise<UserDetails | any> {
    const { email, password } = existingUser;

    const user = await this.validateUser(email, password);
    const userDoc: UserDocument = await this.userService.findByEmail(email);

    if (!user) {
      throw new HttpException(
        { type: "invalidCredentials" },
        HttpStatus.UNAUTHORIZED
      );
    }

    const jwt = await this.jwtService.signAsync({ user });

    const newUserDetails = {
      id: userDoc._id,
      fullName: userDoc.fullName,
      email: userDoc.fullName,
    };

    return { token: jwt, user: newUserDetails };
  }

  async register(user: Readonly<NewUserDTO>): Promise<UserDetails | any> {
    const { fullName, email, password } = user;

    const existingUser = await this.userService.findByEmail(email);

    if (existingUser) {
      throw new HttpException({ type: "emailTaken" }, HttpStatus.CONFLICT);
    }

    const hashedPassword = await this.hasPassword(password);

    const newUser = await this.userService.createUser(
      fullName,
      email,
      hashedPassword
    );

    const jwt = await this.jwtService.signAsync({ newUser });

    return { user: this.userService._getUserDetails(newUser), token: jwt };
  }
}
