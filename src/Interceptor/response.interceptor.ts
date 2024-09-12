import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpException, Inject } from '@nestjs/common';
import { Observable,catchError, map, tap, throwError } from 'rxjs';
import { ExceptionInterceptor } from './exception.interceptor';

export interface Response<T> {
    data: T;
  }
  
@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T,Response<T>> {
    constructor(
        @Inject(ExceptionInterceptor) private readonly exceptionInterceptor: ExceptionInterceptor
      ) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(map(data => {
        if (data && typeof data === 'object' && data.hasOwnProperty('data')) {
            // If it's already wrapped, return it as is
            return data;
          }
          // Otherwise, wrap it in the desired format
          return {
            success: true,
            data,
          };
    })
    //,
    //  catchError((error) => {
    //     // Handle errors here
    //     if (error instanceof HttpException) {
    //         const status = error.getStatus();
    //         const response = error.getResponse();
    //       return throwError(()=>({
    //         success: false,
    //         error: response,
    //         statusCode: status,
    //     }));
    //     }
    //     return throwError(()=>({
    //         success: false,
    //         error: "Internal server error.",
    //     })) 
    //   })
    );

    // return next.handle().pipe(
    //   tap((data) => {
    //     // Modify response data here if needed
    //     // Example of wrapping the response in a standard format
    //     if (data) {
    //       const response = {
    //         success: true,
    //         data,
    //       };
    //       return response;
    //     }
    //   }),
    //   catchError((error) => {
    //     // Handle errors here
    //     if (error instanceof HttpException) {
    //       const status = error.getStatus();
    //       const response = error.getResponse();
    //       return throwError(()=>({
    //         success: false,
    //         error: response,
    //         statusCode: status,
    //     }))
    //     }
    //     return throwError(()=>({
    //         success: false,
    //         error: 'Internal server error',
    //     })) 
    //   })
    // );
  }
}