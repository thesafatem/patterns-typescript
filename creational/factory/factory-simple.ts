export { }

enum InsuranceStatus {
	PENDING,
	ACTIVE,
	EXPIRED
}

interface IInsurance {
	id: number;
	status: InsuranceStatus;
	submit(): boolean;
}

class InsuranceA implements IInsurance {
	id: number;
	status: InsuranceStatus;
	submit() {
		return true;
	}
}

class InsuranceB implements IInsurance {
	id: number;
	status: InsuranceStatus;
	submit() {
		return false;
	}
}

const INSURANCES = {
	a: InsuranceA,
	b: InsuranceB
}

type INSURANCE_TYPE = typeof INSURANCES;

class InsuranceFactory {
	static createInsurance<T extends keyof INSURANCE_TYPE>(insuranceType: T): INSURANCE_TYPE[T] {
		return INSURANCES[insuranceType]
	}

	static db: Map<number, InsuranceStatus> = new Map();
	static saveHistory(insurance: IInsurance) {
		this.db.set(insurance.id, insurance.status);
	}
}

const insuranceA = new (InsuranceFactory.createInsurance('a'));
const insuranceB = new (InsuranceFactory.createInsurance('b'));
InsuranceFactory.saveHistory(insuranceA);
InsuranceFactory.saveHistory(insuranceB);