import { Contact } from 'src/modules/contacts/entities/contact.entity';
import { Message } from 'src/modules/messages/entities/message.entity';
import { User } from 'src/modules/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Conversation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'userId', nullable: true })
  userId: number;

  @Column({ name: 'contactId', nullable: true })
  contactId: number;

  @ManyToOne(() => User, (user) => user.conversations)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user?: User;

  @ManyToOne(() => Contact, (contact) => contact.conversations)
  @JoinColumn({ name: 'contactId', referencedColumnName: 'id' })
  contact?: Contact;

  @OneToMany(() => Message, (messages) => messages.conversation)
  messages: Message[];

}
