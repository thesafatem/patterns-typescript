class RoundHole {
	private radius: number;

	constructor()
	constructor(radius: number)
	constructor(radius?: number) {
		if (radius) {
			this.radius = radius;
		}
	}

	getRadius(): number {
		return this.radius;
	}

	fits(peg: RoundPeg): boolean {
		return this.getRadius() >= peg.getRadius();
	}
}

class RoundPeg {
	private radius: number;

	constructor()
	constructor(radius: number)
	constructor(radius?: number) {
		if (radius) {
			this.radius = radius;
		}
	}

	getRadius(): number {
		return this.radius;
	}
}

class SquarePeg {
	private width: number;

	constructor()
	constructor(width: number)
	constructor(width?: number) {
		if (width) {
			this.width = width;
		}
	}

	getWidth(): number {
		return this.width;
	}
}

class SquarePegAdapter extends RoundPeg {
	private peg: SquarePeg;

	constructor()
	constructor(peg: SquarePeg)
	constructor(peg?: SquarePeg) {
		super();
		if (peg) {
			this.peg = peg;
		}
	}

	getRadius(): number {
		return this.peg.getWidth() * Math.SQRT2 / 2;
	}
}

const hole = new RoundHole(5);
const roundPeg = new RoundPeg(3);
console.log(hole.fits(roundPeg));

const smallSquarePeg = new SquarePeg(5);
// console.log(hole.fits(speg)); COMPILATION ERROR
const smallSquarePegAdapter = new SquarePegAdapter(smallSquarePeg);
console.log(hole.fits(smallSquarePegAdapter));

const largeSquarePeg = new SquarePeg(8);
const largeSquarePegAdapter = new SquarePegAdapter(largeSquarePeg);
console.log(hole.fits(largeSquarePegAdapter));