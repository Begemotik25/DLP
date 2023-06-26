import { Module } from '@nestjs/common';
import { ChatRoomsGateway } from './chat-rooms.gateway';

@Module({
  providers: [ChatRoomsGateway]
})
export class ChatRoomsModule {}
