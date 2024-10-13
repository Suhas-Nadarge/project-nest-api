import { Controller, Get } from '@nestjs/common';
import { ItemsService } from './items.service'; // Adjust the path as necessary
import { Item } from './dto/create-item.dto';

@Controller('items') // This will be the base route for this controller
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get('fetch') // This will handle GET requests to /items/fetch
  async fetchData(): Promise<Item[]> {
    return this.itemsService.findAll(); // Call the service method to get data
  }
}
