import { PrimaryGeneratedColumn, Entity, Column } from "typeorm";

@Entity()

export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 500 })
    nombre: string;
    @Column('text')
    email: string;
    @Column('text')
    contrasena: string;
    @Column('text')
    isActive: boolean;
   
   constructor(){}
}





