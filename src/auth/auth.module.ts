import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UserModule } from "src/user/user.module";
import { JwtGuard } from "./guards/jwt.guard";
import { JwtStrategy } from "./guards/jwt.strategy";

@Module({
  imports: [
    UserModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: "secret",
        signOptions: { expiresIn: "3600s" },
      }),
    }),
  ],
  providers: [AuthService, JwtGuard, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
