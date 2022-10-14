import { ApiProperty } from "@nestjs/swagger";

export class ManagerDTO {
  @ApiProperty()
  name: string;
  @ApiProperty()
  fathersLastName: string;
  @ApiProperty()
  mothersLastName: string;
  @ApiProperty()
  dateBirth: Date;
  @ApiProperty()
  genere: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  phone: number;
  @ApiProperty()
  password: string;
}
