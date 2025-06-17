import { Controller,Get, Post, Param, Patch ,Delete, Body } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
    constructor(private readonly loginService: LoginService) {}

  @Post('register')
  register(@Body() dto: any) {
    return this.loginService.register(dto);
  }

  @Post('login')
  login(@Body() dto: any) {
    return this.loginService.login(dto);
  }

  @Get()
  findAll() {
    return this.loginService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loginService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: any) {
    return this.loginService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loginService.delete(id);
  }
}
