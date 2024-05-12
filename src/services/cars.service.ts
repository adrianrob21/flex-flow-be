import { Injectable } from "@nestjs/common";

@Injectable()
export class CarsService {
  getCars(): string {
    return "Passat + 2003";
  }
}
