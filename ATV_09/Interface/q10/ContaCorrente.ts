import { Tributavel } from "./Tributavel";

export class ContaCorrente extends Conta_ implements Tributavel {
    calcularTributos(): number {
        return this.saldo * 0.1
    }
}
