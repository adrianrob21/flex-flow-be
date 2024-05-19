import { UserService } from "./user.service";
import { UserDetails } from "./user-details.interface";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUser(headers: Record<string, string>): Promise<UserDetails>;
}
