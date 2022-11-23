export interface Defensible {
    isDeleted(): boolean
    defendAttack(attackValue: number): number
}