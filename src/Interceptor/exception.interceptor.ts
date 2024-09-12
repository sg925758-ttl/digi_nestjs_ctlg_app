import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpException, HttpStatus } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ExceptionInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (error instanceof HttpException) {
            // Custom logic to handle HttpException
            return throwError(() => new HttpException({
              statusCode: error.getStatus(),
              message: error.message,
            }, error.getStatus()));
          } else {
            // Handle other types of errors
            return throwError(() => new HttpException('Internal server error', 500));
          }
        // if (error instanceof HttpException) {
        //   // Extract status code and response details from HttpException
        //   const status = error.getStatus();
        //   const response = error.getResponse();
          
        //   return throwError(() => ({
        //     success: false,
        //     error: response,
        //     statusCode: status,
        //   }));
        // }
        
        // // Handle unexpected errors
        // return throwError(() => ({
        //   success: false,
        //   error: 'Internal server error',
        //   statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        // }));
      })
    );
  }
}