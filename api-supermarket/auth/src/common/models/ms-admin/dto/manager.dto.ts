import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsEmail, IsInt, IsString } from "class-validator";

export class ManagerDTO {
  @ApiProperty()
  @IsString()
  name: string;
  
  @ApiProperty()
  @IsString()
  fathersLastName: string;
  
  @ApiProperty()
  @IsString()
  mothersLastName: string;
  
  @ApiProperty()
  @IsDateString()
  bornDate: Date;
  
  @ApiProperty()
  @IsString()
  genere: string;
  
  @ApiProperty()
  @IsString()
  @IsEmail()
  email: string;
  
  @ApiProperty()
  @IsInt()
  phone: number;
  
  @ApiProperty()
  @IsString()
  password: string;
}
