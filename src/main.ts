import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { CorsOptions, CorsModule } from "cors";

const corsOptions: CorsOptions = {
  origin: ["http://localhost:3000"],
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(CorsModule.forRoot(corsOptions));
  await app.listen(3000);
}
bootstrap();
