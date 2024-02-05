import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import * as sha256 from 'crypto-js/sha256';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.usersService.findByUsername(username);

    if (user) {
      const compare = await bcrypt.compare(password, user.password);
      if (compare) {
        const { password, ...result } = user;
        return result as User;
        console.info(password);
      }
    }

    return null;
  }

  async login(username: string, password: string) {
    if (!username || !password)
      throw new UnauthorizedException(
        'Login inválido. Verifique os dados de nome de usuário e senha e tente novamente',
      );

    const user = await this.validateUser(username, password);
    if (!user)
      throw new UnauthorizedException(
        'Oops! Não foi possível realizar o login. Verifique os dados de nome de usuário e senha e tente novamente',
      );

    return this.validateUserByJwt(user);
  }

  async register(body: CreateUserDto) {
    const verify = await this.usersService.verifyIfUserExists(
      body.email,
      body.username,
    );
    if (verify)
      throw new UnauthorizedException(
        'Oops! Nome de usuário ou email já cadastrado',
      );

    const user = await this.usersService.create(body);

    return this.validateUserByJwt(user);
  }

  async validateUserByJwt(user: User) {
    const hash = sha256(user.email);
    const avatar = `https://gravatar.com/avatar/${hash}?s=800`;

    return {
      access_token: this.jwtService.sign({
        email: user.email,
        username: user.username,
        sub: user.id,
        avatar,
      }),
    };
  }
}
