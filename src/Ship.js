export default class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.sunk = false;
    }

    hit() {
        return this.hits++;
    }

    isSunk() {
        if (this.hits == this.length) {
            return this.sunk = true;
        }
        else {
            return this.sunk;
        }
    }
}




// Ship.hits = number of hits
// Ship.hit() = add hit

// Ship.isSunk() = checks if sunk - returns true/false