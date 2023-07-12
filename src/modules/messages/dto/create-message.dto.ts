import { PartialType } from '@nestjs/swagger';
import { Message } from '../entities/message.entity';

export class CreateMessageDto extends PartialType(Message) {}
