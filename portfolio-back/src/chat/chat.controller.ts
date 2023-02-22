import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}
  @Get('chats')
  getChats() {
    return this.chatService.findAllChats();
  }

  @Post('chat')
  async postChat(@Body() createChatDto: CreateChatDto) {
    this.chatService.createChat(createChatDto);
  }
}
