import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>,
  ) {}
  create(createContactDto: CreateContactDto) {
    return this.contactRepository.save(createContactDto);
  }

  findAll() {
    return this.contactRepository.find({
      relations: ['conversations', 'conversations.messages'],
    });
  }

  findOne(id: number) {
    return this.contactRepository.findOne({
      where: { id },
      relations: ['conversations', 'conversations.messages'],
    });
  }

  update(id: number, updateContactDto: UpdateContactDto) {
    return this.contactRepository.update(id, updateContactDto);
  }

  remove(id: number) {
    return this.contactRepository.delete(id);
  }
}
