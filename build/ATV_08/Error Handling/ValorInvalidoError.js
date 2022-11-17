"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValorInvalidoError = void 0;
const AplicacaoError_1 = require("./AplicacaoError");
class ValorInvalidoError extends AplicacaoError_1.AplicacaoError {
    constructor(message) { super(message); }
}
exports.ValorInvalidoError = ValorInvalidoError;
