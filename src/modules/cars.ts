import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CarsController } from "src/controllers/cars.controller";
import { Cars, CarsSchema } from "src/schemas/cars";

import { CarsService } from "src/services/cars";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Cars.name,
        schema: CarsSchema,
      },
    ]),
  ],
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}
