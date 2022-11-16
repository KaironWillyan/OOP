import { AplicacaoError } from "./AplicacaoError";

export class ContaExistenteError extends AplicacaoError{
    constructor(message: string){super(message)}
}