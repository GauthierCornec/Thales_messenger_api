import { Injectable } from '@nestjs/common';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { UpdateConversationDto } from './dto/update-conversation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Conversation } from './entities/conversation.entity';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { Contact } from '../contacts/entities/contact.entity';

@Injectable()
export class ConversationsService {
  constructor(
    @InjectRepository(Conversation)
    private readonly conversationRespository: Repository<Conversation>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>,
  ) {}
  async create(createConversationDto: CreateConversationDto){
    return this.conversationRespository.save(createConversationDto);
  }

  findAll() {
    return this.conversationRespository.find();
  }

  findOne(id: number) {
    return this.conversationRespository.findOne({
      where: { id },
    });
  }

  update(id: number, updateConversationDto: UpdateConversationDto) {
    return this.conversationRespository.update(id, updateConversationDto);
  }

  remove(id: number) {
    return this.conversationRespository.delete(id);
  }
}
