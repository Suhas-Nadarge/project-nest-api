// src/items/dto/create-item.dto.ts
import { InputType, Field, Int } from '@nestjs/graphql';

@InputType() // Ensure you have this decorator
export class CreateItemDto {
  // @Field() // Ensure each field has a decorator
  // name: string;

  // @Field() // Ensure each field has a decorator
  // description: string;

  @Field(() => Int) // Specify the type for the qty field
  qty: number;
}


export interface Item {
  id?: string;       // Optional because MongoDB will automatically generate it
  name: string;
  description: string;
  qty: number;
}
