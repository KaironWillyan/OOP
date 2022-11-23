import { Tributavel } from "./Tributavel";

export class SeguroDeVida implements Tributavel {
    calcularTributos(): number {
        return 50.0
    }
}