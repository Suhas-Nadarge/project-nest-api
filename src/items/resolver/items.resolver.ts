import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateItemDto } from '../dto/create-item.dto';
import { ItemsService } from '../items.service';
import { ItemType } from '../type/item.type';

@Resolver(() => ItemType) // Make sure you're using the correct decorator
export class ItemsResolver {
  constructor(private readonly itemsService: ItemsService) {}

  @Query(() => [ItemType]) // Query returning an array of ItemType
  async items() {
    return this.itemsService.findAll();
  }

  @Mutation(() => ItemType) // Mutation returning a single ItemType
  async createItem(@Args('createItemDto') createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto);
  }
}
