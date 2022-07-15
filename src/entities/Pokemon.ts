import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("pokemon")
export class Pokemon {

    @PrimaryGeneratedColumn("uuid")
    id?: string

    @Column()
    name: string

    @Column()
    specie: string

    @Column()
    image: string

    @Column()
    height?: string

    @Column()
    weight?: string

    @Column()
    titulo?:string

}
