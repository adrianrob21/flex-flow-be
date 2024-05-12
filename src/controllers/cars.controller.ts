import { CarsService } from "src/services/cars";
import { CreateCarDTO } from "src/DTOS/cars/createCar";
import { Body, Controller, Post } from "@nestjs/common";

@Controller("cars")
export class CarsController {
  constructor(private carsService: CarsService) {}
  @Post()
  createCar(@Body() createCarDto: CreateCarDTO) {
    return this.carsService.createCar(createCarDto);
  }
}
