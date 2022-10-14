import { ApiProperty } from "@nestjs/swagger";

export class Department {
  @ApiProperty()
  name: string;
}
