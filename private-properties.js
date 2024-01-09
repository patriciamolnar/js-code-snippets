'use strict';

const log = console.log;

class City {
    #name;
    #country;
    #population = 0;

    constructor(name, country) {
        this.#name = name;
        this.#country = country;
    }

    get name() {
        return this.#name;
    }

    get country() {
        return this.#country;
    }

    get population() {
        return this.#population;
    }

    set population(value) {
        if(typeof value === 'number' && value > 0) {
            this.#population = value;
        }
    }
}

const hk = new City('Hong Kong', 'China');
console.log(hk.name);
console.log(hk.country);
console.log(hk.population);
hk.population = 7500000;
console.log(hk.population);