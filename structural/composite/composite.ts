abstract class Item {
	items: Item[] = [];

	addItem(item: Item): void {
		this.items.push(item);
	}

	getPrice(): number {
		return this.items.reduce((total: number, cur: Item) => {
			return total + cur.getPrice();
		}, 0)
	}
}

class Delivery extends Item {
	constructor(public fee: number) {
		super();
	}

	getPrice(): number {
		return super.getPrice() + this.fee;
	}
}

class Package extends Item { }

class Product extends Item {
	constructor(public price: number) {
		super();
	}

	getPrice(): number {
		return this.price;
	}
}

const delivery = new Delivery(15);
delivery.addItem(new Product(40));
const pack = new Package();
pack.addItem(new Product(100));
const innerPack = new Package();
innerPack.addItem(new Product(130));
innerPack.addItem(new Product(200));
pack.addItem(innerPack);
delivery.addItem(pack);

console.log(delivery.getPrice()) // 485
