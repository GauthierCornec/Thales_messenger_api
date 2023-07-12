import { ApiProperty } from '@nestjs/swagger';
import { Contact } from 'src/modules/contacts/entities/contact.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'user' })
export class User {
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

  @ApiProperty({ default: 'jean' })
  @Column({ name: 'entryDate', nullable: true })
  public entryDate: Date;

  @ApiProperty({ default: 'jean' })
  @Column({ name: 'password', nullable: true })
  public password: string;

  @ApiProperty({ default: 'jean' })
  @UpdateDateColumn({ name: 'updatedAt', nullable: true })
  public updatedAt: Date;

  @ApiProperty({ default: 'jean' })
  @CreateDateColumn({ name: 'createdAt', nullable: true })
  public createdAt: Date;

  @OneToMany(() => Contact, (contacts) => contacts.user)
  contacts?: Contact[];
}
