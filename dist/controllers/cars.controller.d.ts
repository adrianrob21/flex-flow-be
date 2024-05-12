import { Request } from "express";
import { CarsService } from "src/services/cars.service";
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
    findAll(request: Request): string;
}
