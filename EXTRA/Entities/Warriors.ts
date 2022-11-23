import { AlreadyDeletedException } from "../Exceptions/AlreadyDeletedException";
import { Defensible } from "../interfaces/Defensible";

export class Warrios implements Defensible{
    id: number;
    description: string;
    strikeForce: number;
    life: number = 10;

    constructor(id: number, description: string, strikeForce: number, life: number){
        this.id = id
        this.description = description
        this.strikeForce = strikeForce
        this.life = life
    }

    isDeleted(): boolean {
        return this.life <= 0;
    }

    defendAttack(attackValue: number): number {
        return this.life -= attackValue
    }

    warriorAttacK(Defensible: Defensible){
        if(Defensible.isDeleted()){
            throw new AlreadyDeletedException('Defensive eliminated')
        }
        Defensible.defendAttack(this.strikeForce)
    }
}