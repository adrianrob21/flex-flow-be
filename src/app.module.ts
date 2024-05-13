import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./user/user.module";
import { AppController } from "./app.controller";

@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb+srv://adirobadi03:indxvTWIaQob04jl@flexflowstaging.axkoshe.mongodb.net/flexFlowStaging?retryWrites=true&w=majority&appName=flexFlowStaging"
    ),
    UserModule,
    AuthModule,
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
