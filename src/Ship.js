export default class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.vert = false;
        this.placement = [];
        this.sunk = false;
        this.placed = false;
    }

    altVert () {
        if (this.vert) {
            this.vert = false
        }
        else if (!this.vert) {
            this.vert = true
        }
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

    shipPlaced() {
        if (this.placement.length > 0) {
            this.placed = true;
        }
        else {
            return this.placed
        }
    }
}




// Ship.hits = number of hits
// Ship.hit() = add hit

// Ship.isSunk() = checks if sunk - returns true/false