import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateChatDto } from './dto/create-chat.dto';
import { Chat, ChatDocument } from './schema/chat.schema';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(Chat.name) private readonly chatModel: Model<ChatDocument>,
  ) {}

  async createChat(createChatDto: CreateChatDto) {
    const chat = new this.chatModel(createChatDto);
    return chat.save();
  }

  async findAllChats() {
    return this.chatModel.find();
  }
}
