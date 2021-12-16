import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("transactions API")
    .setDescription("API for transactions App")
    .setVersion("1.0")
    .addTag("Transactions API")
    // .addBearerAuth(
    //   { type: "http", scheme: "bearer", bearerFormat: "JWT" },
    //   "access-token",
    // )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
