import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('/signup')
    signUp(@Body() authcredentialsDto: AuthCredentialsDto): Promise<void> {
        return this.authService.singUp(authcredentialsDto);
    }

    @Post('/signin')
    signIn(
        @Body() authcredentialsDto: AuthCredentialsDto,
    ): Promise<{ accessToken: string }> {
        return this.authService.signIn(authcredentialsDto);
    }

}
