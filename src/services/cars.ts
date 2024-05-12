import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateCarDTO } from "src/DTOS/cars/createCar";
import { Cars } from "src/schemas/cars";

@Injectable()
export class CarsService {
  constructor(@InjectModel(Cars.name) private carsModel: Model<Cars>) {}

  createCar(createCarDto: CreateCarDTO) {
    const newCar = new this.carsModel(createCarDto);
    return newCar.save();
  }
}
