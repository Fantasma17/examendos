import {
    IsArray,
    IsIn,
    IsNumber,
    IsOptional,
    IsPositive,
    IsString,
    MinLength
} from 'class-validator';
export class CreateEmpleadoDto {
    @IsString()
    @MinLength(1)
    nombre: string;

    @IsString()
    @MinLength(1)
    puesto: string;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    salario?: number;

    @IsString()
    @MinLength(1)
    departamento: string;

    @IsString()
    @MinLength(1)
    extension_telefonica: string;
}
