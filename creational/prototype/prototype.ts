interface Prototype<T> {
	clone(): T;
}

class User implements Prototype<User> {
	createdAt: Date;

	constructor(public email: string, public name: string) {
		this.createdAt = new Date();
	}

	clone(): User {
		let target = new User(this.email, this.name);
		target.createdAt = this.createdAt;
		return target;
	}
}

let user1 = new User('email@email.com', 'a');
let user2 = user1.clone();
console.log(user1);
console.log(user2);