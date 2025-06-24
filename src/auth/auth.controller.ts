import { AuthService } from './../auth/auth.service';
import { Body, Controller, HttpCode, HttpStatus, Post,UseGuards,Get ,Request } from '@nestjs/common';
import { AuthGuard } from './../auth/auth.guard';

@Controller('auth')
export class AuthController {
  

    constructor (private  authService : AuthService){}
    
    @HttpCode(HttpStatus.OK)

    @Post('login')
      signIn(@Body() signInDto: Record<string,any>){
        return this.authService.signIn(signInDto.username, signInDto.password);

      }
      @UseGuards(AuthGuard)
      @Get('profile')
      getProfile(@Request() req) {
        return req.user;
      }


}
