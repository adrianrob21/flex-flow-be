import { Module } from "@nestjs/common";
import { WorkoutService } from "./workout.service";
import { WorkoutController } from "./workout.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Workout, WorkoutSchema } from "./workout.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Workout.name, schema: WorkoutSchema }]),
  ],
  providers: [WorkoutService],
  controllers: [WorkoutController],
  exports: [WorkoutService],
})
export class WorkoutModule {}
