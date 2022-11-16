import { AplicacaoError } from "./AplicacaoError";

export class ValorInvalidoError extends AplicacaoError{
    constructor(message: string){super(message)}
}