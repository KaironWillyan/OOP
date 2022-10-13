"use strict";
class Hora {
    constructor(hora, minuto, segundo) {
        this.hora = hora;
        this.minuto = minuto;
        this.segundo = segundo;
    }
    lerHora() {
        return this.hora;
    }
    lerMinuto() {
        return this.minuto;
    }
    lerSegundo() {
        return this.segundo;
    }
    retornaHoraFormatada() {
        return `${this.hora}:${this.minuto}:${this.segundo}`;
    }
}
