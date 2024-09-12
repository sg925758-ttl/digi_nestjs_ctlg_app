import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './config/configuration';
import { validationSchema } from './config/validation';
import { UploadFileController } from './Controllers/upload-file/upload-file.controller';
import { UploadFileService } from './Services/upload-file/upload-file.service';
import { ResponseInterceptor } from './Interceptor/response.interceptor';
import { ExceptionInterceptor } from './Interceptor/exception.interceptor';
import { CustomHttpExceptionFilter } from './Interceptor/custom-http-exception-filter';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { AuthGuard, KeycloakConnectModule, ResourceGuard, RoleGuard } from 'nest-keycloak-connect';
import { keycloakConfigModules } from './config/config.module';
import { KeycloakConfigService } from './config/keycloak-config-service';
import { DemoDBModule } from './sample/demoOCRL/demoDB.module';
@Module({
  imports: [
    KeycloakConnectModule.registerAsync({
      useExisting: KeycloakConfigService,
      imports: [keycloakConfigModules],
    }),
  //  AuthModule,
    // KeycloakConnectModule.register({
    //   authServerUrl:process.env.authServerurl,
    //   realm:process.env.realm,
    //   clientId:process.env.clientId,
    //   secret:process.env.secret,
    //   logLevels: ['verbose'],
    //   useNestLogger: true,
    //   public:true,
    //   "public-client":true,
    //   bearerOnly:true,
    //   serverUrl:process.env.authServerurl,
    //   "ssl-required":process.env.sslrequired,
    //   "confidential-port":process.env.confidentialport,
    //   realmPublicKey:process.env.realmPublicKey,
    //   "realm-public-key":process.env.realmPublicKey,
    //   policyEnforcement: PolicyEnforcementMode.PERMISSIVE,
    //   tokenValidation: TokenValidation.ONLINE,
    //   multiTenant:{
    //     realmResolver:(req)=>{
    // console.log(process.env.authServerurl);
    // console.log(process.env.realm);
    // console.log(process.env.clientId);
    // console.log(process.env.secret);
    // console.log(process.env.sslrequired);
    //       return req.get("host").split(".")[0];
    //     }
    //   }
    // }),
    ConfigModule.forRoot({ 
    envFilePath: `src/config/env/${process.env.NODE_ENV}.env`,
    isGlobal:true,
    expandVariables:true,
    load: [configuration],
      validationSchema,
 }),
 DemoDBModule
//  DatabaseModule
],
  controllers: [AppController,UploadFileController],
  providers: [
    {
    provide: APP_GUARD,
    useClass: AuthGuard,
  },
  {
    provide: APP_GUARD,
    useClass: ResourceGuard,
  },
  {
    provide: APP_GUARD,
    useClass: RoleGuard,
  },
    AppService,UploadFileService,ExceptionInterceptor,
    {provide:APP_INTERCEPTOR,useClass:ResponseInterceptor},
    {
      provide: APP_FILTER,
      useClass: CustomHttpExceptionFilter,
    },],
    
})
export class AppModule {
  constructor(){
    console.log(process.env.authServerurl)
  }
}
