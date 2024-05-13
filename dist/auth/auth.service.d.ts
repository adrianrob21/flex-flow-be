import { UserService } from "src/user/user.service";
import { NewUserDTO } from "src/user/dtos/new-user.dto";
import { UserDetails } from "src/user/user-details.interface";
import { ExistingUserDTO } from "src/user/dtos/existing-user.dto";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    hasPassword(password: string): Promise<string>;
    doesThePasswordMatch(password: string, hashedPassword: string): Promise<boolean>;
    validateUser(email: string, password: string): Promise<UserDetails>;
    login(existingUser: ExistingUserDTO): Promise<{
        token: string;
    } | null>;
    register(user: Readonly<NewUserDTO>): Promise<UserDetails | any>;
}
