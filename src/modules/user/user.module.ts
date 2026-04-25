import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { EmailModule } from '../email/email.module';

@Module({
  providers: [UserResolver, UserService],
  imports: [EmailModule],
})
export class UserModule {}
