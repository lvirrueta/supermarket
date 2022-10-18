import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ErrorService {
  private readonly logger = new Logger('DB Error');

  /** Check if the response is a HTTP-Exception or DB-Exception otherwise return the response 
   * @param {any} response
   * @return {any} return response only if is not a exception otherwise throw an error
  */
  public isError( response: any ): any {
    this.isHTTPException(response);
    this.isDBException(response);
    return response;
  }

  /** Check if is a HTTP Exception */
  private isHTTPException( response: any ): boolean {
    const httpExceptionKeys = ['response', 'status', 'message', 'name'];
    const isException = httpExceptionKeys.every(value => {
      return Object.keys(response).includes(value);
    })
    if(!isException) return false;
    throw new HttpException(
      response['message'], 
      response['status']
    );
  }

  /** Check if is a DB Exception */
  private isDBException( response: any ): boolean {
    const dbExceptionKeys = ['query', 'code'];
    const isException = dbExceptionKeys.every(value => {
      return Object.keys(response).includes(value);
    })
    if(!isException) return;
    this.handleDBException(response);
    throw new HttpException(
      'Internal Server Error',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  /** Handling db Errors */
  private handleDBException( dbError: any ): void {
    // console.log(dbError);
    switch( dbError.code ){
      case '23502': {
        this.logger.error(`Code: ${dbError.code} Error: NOT NULL VIOLATION`);
        break
      }
      default: {
        this.logger.error(`Status 500 Error: ${dbError.code}`);
        break;
      }
    }

  }

}
