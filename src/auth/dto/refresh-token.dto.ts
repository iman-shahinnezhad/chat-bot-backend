import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class RefreshTokenDto {
  @ApiProperty({ description: 'Refresh token issued during authentication.' })
  @IsString()
  @MinLength(10)
  refreshToken!: string;
}
