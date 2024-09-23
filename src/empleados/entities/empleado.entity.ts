import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Empleado {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column('text', {
        unique: true,
    })
    nombre: string;

    @Column('text', {
        unique: true,
    })
    puesto: string;

    @Column('float', {
        default: 0,
    })
    salario: number;

    @Column('text', {
        unique: true,
    })
    departamento: string;

    @Column('text', {
        unique: true,
    })
    extension_telefonica: string;
}
