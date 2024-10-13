import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class ItemType {
  @Field()
  id: string; // or use `@Field(() => ID)` if you want it as an ID type

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  qty: number;
}
