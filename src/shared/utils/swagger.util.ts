import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export function SwaggerSetup (app) {
  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-by-luke', app, document, { 
    customCss: `.swagger-ui .opblock .opblock-summary .view-line-link {
      margin: 0 5px;
      width: 24px;
    }`
     
  });
}