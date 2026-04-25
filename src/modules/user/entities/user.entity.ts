import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  fullName!: string;

  @Field()
  email!: string;

  @Field()
  id!: string;
}
