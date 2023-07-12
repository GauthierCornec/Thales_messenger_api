import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
