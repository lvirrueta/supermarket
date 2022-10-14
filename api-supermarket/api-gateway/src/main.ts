import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './common/utils/filters/http-exception.filter';
import { TimeOutInterceptor } from './common/utils/interceptors/timeout.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionFilter());
  app.useGlobalInterceptors(new TimeOutInterceptor());
  const OPTIONS = new DocumentBuilder()
    .setTitle('API Supermarket')
    .setDescription('Supermarket management system')
    .setVersion('1.0.0')
    .build();
  const DOCUMENT = SwaggerModule.createDocument(app, OPTIONS);
  SwaggerModule.setup('/api/docs', app, DOCUMENT, {
    swaggerOptions: {
      filter: true,
    }
  });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
