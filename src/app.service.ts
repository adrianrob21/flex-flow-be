import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!";
  }
  getNewNestApllication(): string {
    return "Hello this is my first nest application";
  }
}
