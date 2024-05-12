import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CarsService } from "./services/cars";
import { CarsController } from "./controllers/cars.controller";
import { CarsModule } from "./modules/cars";

@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb+srv://adirobadi03:indxvTWIaQob04jl@flexflowstaging.axkoshe.mongodb.net/flexFlowStaging?retryWrites=true&w=majority&appName=flexFlowStaging"
    ),
    CarsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
