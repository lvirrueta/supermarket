import { ApiProperty } from "@nestjs/swagger";

export class Employee {
  @ApiProperty()
  name: string;
  @ApiProperty()
  fathersLastName: string;
  @ApiProperty()
  mothersLastName: string;
  @ApiProperty()
  phone: number;
  @ApiProperty()
  workingDays: string;
  @ApiProperty()
  customID: string;
  @ApiProperty()
  departmentID: number;
}
