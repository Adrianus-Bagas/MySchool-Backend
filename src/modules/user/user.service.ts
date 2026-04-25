import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { generatedRandomString } from 'src/utils/generateRandomString';
import { EmailService } from '../email/email.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    private prismaService: PrismaService,
    private emailService: EmailService,
  ) {}

  async create(createUserInput: CreateUserInput) {
    const generatedPassword = generatedRandomString(10);
    const hashedPassword = await bcrypt.hash(generatedPassword, 10);
    const user = await this.prismaService.user.create({
      data: {
        email: createUserInput.email,
        fullName: createUserInput.name,
        password: hashedPassword,
      },
      select: {
        email: true,
        fullName: true,
        id: true,
      },
    });
    await this.emailService.sendVerificationEmail(
      createUserInput.email,
      generatedPassword,
    );

    return user;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} ${updateUserInput.id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
