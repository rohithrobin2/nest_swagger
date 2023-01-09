import { ApiProperty } from '@nestjs/swagger';
import { BaseEnitity } from 'src/base-entity';
import { Column, Entity } from 'typeorm';

// export class User {
//   @ApiProperty()
//   id: number;

//   @ApiProperty()
//   name: string;
// }
@Entity('users')
export class User extends BaseEnitity {
  
  @ApiProperty()
  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 100, nullable: true })
  domain: string;

  @ApiProperty()
  @Column({ type: 'text', nullable: true, default: null })
  description: string;
}
