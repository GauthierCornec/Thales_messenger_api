import { Conversation } from './../../conversations/entities/conversation.entity';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/modules/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'message' })
export class Message {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @ApiProperty({ default: '8765432' })
  @Column({ name: 'data', nullable: true })
  public data: string;

  @ApiProperty({ default: '12' })
  @Column({ name: 'conversationId', nullable: true })
  public conversationId?: number;

  @ApiProperty({ default: '12' })
  @Column({ name: 'userId', nullable: true })
  public userId?: number;

  @ApiProperty({ default: 'jean' })
  @CreateDateColumn({ name: 'createdAt', nullable: true })
  public createdAt: Date;

  @ManyToOne(() => Conversation, (conversation) => conversation.messages)
  @JoinColumn({ name: 'conversationId', referencedColumnName: 'id' })
  conversation?: Conversation;

  @ManyToOne(() => User, (user) => user.messages)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user?: User;
}
