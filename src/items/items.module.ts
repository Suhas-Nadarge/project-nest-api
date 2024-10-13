import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemSchema } from './schema/item.schema';
import { ItemsService } from './items.service';
import { ItemsResolver } from './resolver/items.resolver';

@Module({
    imports:[MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }])  // Register the Item model
],
    providers: [ItemsService, ItemsResolver], // Provide resolver
})
export class ItemsModule {}
