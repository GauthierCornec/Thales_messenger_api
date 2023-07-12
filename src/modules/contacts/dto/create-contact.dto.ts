import { PartialType } from '@nestjs/swagger';
import { Contact } from '../entities/contact.entity';

export class CreateContactDto extends PartialType(Contact) {}
