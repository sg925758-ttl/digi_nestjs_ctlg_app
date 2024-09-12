import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseInterceptor } from './Interceptor/response.interceptor';
import { ExceptionInterceptor } from './Interceptor/exception.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('bootstrap');

  logger.log(`Node_ENV: ${process.env.APP_ENV}`);
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new ExceptionInterceptor(),new ResponseInterceptor(new ExceptionInterceptor()));


  app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers','Content-Type, Accept');
    res.header('Access-Control-Allow-Headers','X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
    next();
  });
  app.enableCors(
    {
      allowedHeaders:"*",
      origin: '*',  // URL of your Angular app
    }
  );
  app.enableVersioning({
    type:VersioningType.URI
  });
  const config = new DocumentBuilder()
  .setTitle('NestJS WEB API')
  .setDescription('NestJS WEB API')
  .setVersion('1.0')
  .addTag('NestJS')
  .build();
const documnet = SwaggerModule.createDocument(app,config);
SwaggerModule.setup('api',app,documnet,{
  jsonDocumentUrl: 'swagger/json',
});
const PORT = process.env.PORT ?? 3000;
logger.log(`Auth Service running on port: ${PORT}`);

  await app.listen(PORT,'0.0.0.0');
}
bootstrap();


// https://digi-vor-nga-locator-prod-esb.api.tatamotors.com/?param14=1-1NKYM2GW&param18=27AASCS4462M1ZJ&param3=SB_SSO&param6=VOR-SomPvt-PP2-2425-011248&param9=1-2JXSJCF4&param17=2087860-Parts-Punevor-SomPvt&param12=TMCV-DIST-Parts&param4=550758900601&param5=100&param11=1-2JXSJCFA&param8=1-1NKYM2GE&param20=1-1NTOKY8R&param2=TATA2020&param16=1-1N08DG7X&param19=TMCV-PARTS-W-PUN-2087860-SomPvt-Punevor&param7=2087860&param13=TMCV-Par-W-PUN-2087860-Punevor-DPM
