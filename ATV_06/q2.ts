class Hora{
    private hora: number;
    private minuto: number;
    private segundo: number;

    constructor(hora: number, minuto: number, segundo: number){
        this.hora = hora;
        this.minuto = minuto;
        this.segundo = segundo;
    }

    lerHora(){
        return this.hora;
    }
    lerMinuto(){
        return this.minuto;
    }
    lerSegundo(){
        return this.segundo;
    }
    retornaHoraFormatada(){
        return `${this.hora}:${this.minuto}:${this.segundo}`
    }
}