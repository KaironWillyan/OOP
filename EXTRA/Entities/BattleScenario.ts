import { Defensible } from "../interfaces/Defensible"
import { MilitaryBase } from "./MilitaryBase"
import { Warrios } from "./Warriors"

export class BattleScenario {

    rate(Defensible1: Defensible[], Defensible2: Defensible[]){
        let PB1: number = this.calculateScore(Defensible1)
        let PB2: number = this.calculateScore(Defensible2)
        
        let score1: number = this.calculateDeleted(Defensible2)
        let score2: number = this.calculateDeleted(Defensible1)
        
        if(score1 > score2){
            console.log(`O exército ${Defensible1} venceu!`)
        }else{
            console.log(`O exército ${Defensible2} venceu!`)
        }
    }

    calculateScore(defensible: Defensible[]){
        let defense: Defensible
        let score: number = 0
        for(let i = 0; i < defensible.length; i++){
            defense = defensible[i]
            if(defense instanceof Warrios){
                score += 1
            }
            if(defense instanceof MilitaryBase){
                score += 3
            }
        }
        return score
    }

    calculateDeleted(defensible: Defensible[]){
        let defense: Defensible
        let dead: number = 0
        for(let i = 0; i < defensible.length; i++){
            defense = defensible[i]
            if(defense instanceof Warrios){
                if(defense.isDeleted()){
                    dead += 1
                }
            }
            if(defense instanceof MilitaryBase){
                if(defense.isDeleted()){
                    dead += 3
                }
            }
        }
        return dead
    }

}