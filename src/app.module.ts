import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { CarsService } from "./services/cars.service";
import { CarsController } from "./controllers/cars.controller";
import { AppService } from "./app.service";

@Module({
  imports: [],
  controllers: [AppController, CarsController],
  providers: [AppService, CarsService],
})
export class AppModule {}
