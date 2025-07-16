import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateTask {
  id: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(2, { message: 'El titulo debe tener al menos 2 caracteres' })
  title: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  description: string;
}
