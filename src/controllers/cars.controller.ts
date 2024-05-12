import { Controller, Get, Req } from "@nestjs/common";
import { Request } from "express";

import { CarsService } from "src/services/cars.service";

@Controller("cars")
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @Get()
  findAll(@Req() request: Request): string {
    console.log(request);
    return this.carsService.getCars();
  }
}
