import { Contact } from 'src/modules/contacts/entities/contact.entity';
import { Conversation } from 'src/modules/conversations/entities/conversation.entity';
import { Message } from 'src/modules/messages/entities/message.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'uuid', nullable: true, default: '8765432' })
  uuid: string;

  @Column({ name: 'email', nullable: true, default: 'email@example.com' })
  email: string;

  @Column({ name: 'firstName', nullable: true, default: 'Jean' })
  firstName: string;

  @Column({ name: 'lastName', nullable: true, default: 'Doe' })
  lastName: string;

  @Column({ name: 'phoneNumber', nullable: true, default: '05669949302' })
  phoneNumber: string;

  @Column({ name: 'entryDate', nullable: true })
  entryDate: Date;

  @Column({ name: 'password', nullable: true })
  password: string;

  @UpdateDateColumn({ name: 'updatedAt', nullable: true })
  updatedAt: Date;

  @CreateDateColumn({ name: 'createdAt', nullable: true })
  createdAt: Date;

  @OneToMany(() => Contact, (contact) => contact.user)
  contacts: Contact[];

  @OneToMany(() => Message, (messages) => messages.user)
  messages: Message[];

  @OneToMany(() => Conversation, (conversations) => conversations.user)
  conversations?: Conversation[];
}
