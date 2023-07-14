import { PartialType } from '@nestjs/swagger';
import { Conversation } from '../entities/conversation.entity';

export class CreateConversationDto extends PartialType(Conversation) {}
