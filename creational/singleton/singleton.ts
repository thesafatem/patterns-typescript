class Singleton {
	private static instance: Singleton;

	public db: Map<number, string> = new Map();

	private constructor() { }

	public static getInstance(): Singleton {
		if (!Singleton.instance) {
			Singleton.instance = new Singleton();
		}
		return Singleton.instance;
	}
}

class Service1 {
	addValue(key: number, value: string) {
		const singleton = Singleton.getInstance();
		singleton.db.set(key, value);
	}
}

class Service2 {
	getValue(key: number): string | undefined {
		const singleton = Singleton.getInstance();
		return singleton.db.get(key);
	}
}

const service1 = new Service1();
const service2 = new Service2();

service1.addValue(1, 'ok');
console.log(service2.getValue(1));