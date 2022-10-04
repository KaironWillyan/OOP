class Radio {
    volume : number;
    
    constructor(volume : number) {
        this.volume = volume;
    }
}

// let r : Radio = new Radio();
// r.volume = 10;
// console.log(r.volume)

// Da forma como está, o ccódigo roda, mas aparenta ter erro, pois como foi usado um constructor, ele espera que algum argumento seja utilizado a declarar um objeto.
//Uma forma de resolver, seria:

let r : Radio = new Radio(10);
console.log(r.volume);