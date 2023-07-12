import { ApiProperty } from '@nestjs/swagger';
import { Contact } from 'src/modules/contacts/entities/contact.entity';
import { User } from 'src/modules/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity({ name: 'message' })
export class Message {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @ApiProperty({ default: '8765432' })
  @Column({ name: 'data', nullable: true })
  public data: string;

  @ApiProperty({ default: '12' })
  @Column({ name: 'userId', nullable: true })
  public userId?: number;

  @ApiProperty({ default: '12' })
  @Column({ name: 'contactId', nullable: true })
  public contactId?: number;

  @ManyToOne(() => User, (user) => user.messages)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user?: User;

  @ManyToOne(() => Contact, (contact) => contact.messages)
  @JoinColumn({ name: 'contactId', referencedColumnName: 'id' })
  contact?: Contact;
}
