import { ApiProperty } from '@nestjs/swagger';
import { Message } from 'src/modules/messages/entities/message.entity';
import { User } from 'src/modules/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'contact' })
export class Contact {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @ApiProperty({ default: '8765432' })
  @Column({ name: 'uuid', nullable: true })
  public uuid: string;

  @ApiProperty({ default: 'email@email.fr' })
  @Column({ name: 'email', nullable: true })
  public email: string;

  @ApiProperty({ default: 'jean' })
  @Column({ name: 'firstName', nullable: true })
  public firstName: string;

  @ApiProperty({ default: 'jean' })
  @Column({ name: 'lastName', nullable: true })
  public lastName: string;

  @ApiProperty({ default: '05669949302' })
  @Column({ name: 'phoneNumber', nullable: true })
  public phoneNumber: number;

  @ApiProperty({ default: 1, nullable: true })
  @Column({ name: 'userId', nullable: true })
  public userId: number;

  @ManyToOne(() => User, (user) => user.contacts)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user?: User;

  @OneToMany(() => Message, (messages) => messages.contact)
  messages?: Message[];
}
