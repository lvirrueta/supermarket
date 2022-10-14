import { ApiProperty } from "@nestjs/swagger";

export class Supermarket {
  @ApiProperty()
  name: string;
  @ApiProperty()
  businessName: string;
  @ApiProperty()
  postalCode: number;
  @ApiProperty()
  suburb: string;
  @ApiProperty()
  street: string;
  @ApiProperty()
  number: number;
  @ApiProperty()
  state: string;
  @ApiProperty()
  city: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  phone: number;
}