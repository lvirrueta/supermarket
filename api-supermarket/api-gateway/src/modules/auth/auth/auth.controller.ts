// Nest Imports
import {
  Post,
  Controller,
} from '@nestjs/common';
// Dependencies
import { Observable, lastValueFrom } from 'rxjs';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ErrorService } from 'src/common/utils/errors/error.service';
import { ClientProxySupermarket } from 'src/common/utils/proxy/client-proxy';
// DTO
// Classes
// Constants
import { AuthMSG } from 'src/common/utils/proxy/constants';

@ApiTags('Auth')
@Controller('api/v1/auth')
export class AuthController {
  constructor(
    private readonly clientProxy: ClientProxySupermarket,
    private readonly errorService: ErrorService,
  ) {}
  private clientProxyAuth = this.clientProxy.clientProxyAuth();

  /** Sign In */
  @ApiOperation({
    summary: 'Sign in',
  })
  @ApiResponse({
    status: 200,
    description:
      'Introduce your credentials to sign in',
    isArray: true,
    type: Boolean,
  })
  @Post('/sign-in')
  async signIn() {
    const response = await lastValueFrom( this.clientProxyAuth.send( AuthMSG.SIGN_IN, '' ) );
    return this.errorService.isError(response);
  }

}
