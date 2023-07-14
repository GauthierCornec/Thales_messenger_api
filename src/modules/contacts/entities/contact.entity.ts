import { Conversation } from 'src/modules/conversations/entities/conversation.entity';
import { Message } from 'src/modules/messages/entities/message.entity';
import { User } from 'src/modules/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'contact' })
export class Contact {
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

  @Column({ name: 'userId', nullable: true })
  userId: number;

  @ManyToOne(() => User, (user) => user.contacts)
  @JoinColumn({ name: 'userId' })
  user: User;

  @OneToMany(() => Conversation, (conversations) => conversations.contact)
  conversations: Conversation[];
}
