"use strict";
class Hotel {
    constructor(reservas) {
        this.quantReservas = reservas;
    }
    adicionarReserva() {
        this.quantReservas++;
    }
}
let hotel = new Hotel(2);
console.log(hotel.quantReservas);
