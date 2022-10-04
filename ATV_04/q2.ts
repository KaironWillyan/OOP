class Hotel {
    quantReservas : number;

    constructor(reservas : number){
        this.quantReservas = reservas;
    }

    adicionarReserva() : void {
      this.quantReservas++;
    }
}

let hotel : Hotel = new Hotel(2);
console.log(hotel.quantReservas);