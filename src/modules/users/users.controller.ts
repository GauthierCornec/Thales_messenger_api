import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  HttpException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthenticatedRequest } from '../../interfaces/Request';
import {
  noCognitoUUID,
  noOrganisationForUserHttpException,
  noUserExistsHttpException,
} from '../../helper/errors';

@ApiBearerAuth('JWT-auth')
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  // @ApiBearerAuth('JWT-auth')
  // @Roles(Role.RH)
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(@Req() req: AuthenticatedRequest) {
    if (!req.uuid) throw noCognitoUUID();

    return await this.usersService.findAll();
  }

  @Get('me')
  @ApiBearerAuth('JWT-auth')
  async findCurrentUser(@Req() req: AuthenticatedRequest) {
    if (!req.uuid) throw noCognitoUUID();
    if (!req.user) throw noUserExistsHttpException();

    try {
      return this.usersService.getUserInfoFromAuthenticationId(req.uuid);
    } catch (error) {
      throw new HttpException('ERROR', 501);
    }
  }

  @Get(':id')
  @ApiBearerAuth('JWT-auth')
  async findOne(@Req() req: AuthenticatedRequest, @Param('id') id: string) {
    if (!req.uuid) throw noCognitoUUID();

    const user = await this.usersService.findOne(+id);
    if (!user) throw new HttpException('USER_NOT_FOUND', 404);
    return user;
  }

  @Patch(':id')
  @ApiBearerAuth('JWT-auth')
  update(
    @Req() req: AuthenticatedRequest,
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    if (!req.uuid) throw noCognitoUUID();
    if (!req.user) throw noUserExistsHttpException();
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiBearerAuth('JWT-auth')
  remove(@Req() req: AuthenticatedRequest, @Param('id') id: string) {
    if (!req.uuid) throw noCognitoUUID();
    if (!req.user) throw noUserExistsHttpException();
    return this.usersService.remove(+id);
  }
}
