import { Defensible } from "../interfaces/Defensible"

export class MilitaryBase implements Defensible{
    id: number
    locationX: number
    locationY: number
    damagePercent : number

    constructor(id: number, locationX: number, locationY: number, damagePercent: number){
        this.id = id
        this.locationX = locationX
        this.locationY = locationY
        this.damagePercent = damagePercent
    }

    isDeleted(): boolean {
        return this.damagePercent >= 90
    }

    defendAttack(attackValue: number): number {
        return this.damagePercent += attackValue
    }
}