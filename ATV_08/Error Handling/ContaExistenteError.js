"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaExistenteError = void 0;
const AplicacaoError_1 = require("./AplicacaoError");
class ContaExistenteError extends AplicacaoError_1.AplicacaoError {
    constructor(message) { super(message); }
}
exports.ContaExistenteError = ContaExistenteError;
