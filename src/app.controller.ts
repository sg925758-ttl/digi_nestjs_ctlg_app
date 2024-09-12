import { Controller, Get, UseFilters, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { ResponseInterceptor } from './Interceptor/response.interceptor';
import { ExceptionInterceptor } from './Interceptor/exception.interceptor';
import { CustomHttpExceptionFilter } from './Interceptor/custom-http-exception-filter';
import {  Public,  } from 'nest-keycloak-connect';


@Controller()
// @Resource(process.env.clientId) 
@UseInterceptors(ResponseInterceptor)
@UseInterceptors(ExceptionInterceptor)
@UseFilters(CustomHttpExceptionFilter)
export class AppController {
  constructor(private readonly appService: AppService,
    private configService: ConfigService
  ) {}

  @Get()
  @Public(true)
  getHello(): string {
    console.log(this.configService.get<string>('jwt.secret'));
    // console.log(this.configService.get<string>('authServerurl'));
    console.log(process.env.authServerurl);
    return this.appService.getHello() + "  "+ this.configService.get<string>('appName');

    // if (user) {
    //   return `Hello ${user.preferred_username}`;
    // } else {
    //   return this.appService.getHello() + "  "+ this.configService.get<string>('appName');
    // }
  }
  @Get('/public')
  // @Roles({roles:[],mode:RoleMatchingMode.ALL})
  // @SetMetadata('role',['aaa'])
  // @UseGuards(RolesGuard)
  getHelloapi(): string {
    console.log(this.configService.get<string>('jwt.secret'));
    // console.log(this.configService.get<string>('authServerurl'));
    console.log(process.env.authServerurl);
    return this.appService.getHello() + "  "+ this.configService.get<string>('appName');

    // if (user) {
    //   return `Hello ${user.preferred_username}`;
    // } else {
    //   return this.appService.getHello() + "  "+ this.configService.get<string>('appName');
    // }
  }
}
